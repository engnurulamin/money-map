"use client";
import { useState } from "react";
import { Transaction } from "@/types/transaction";
import { toast } from "react-toastify";
import updateTransaction from "@/app/actions/updateTransaction"; // Assuming you have an updateTransaction function
import deleteTransaction from "@/app/actions/deleteTransaction"; // Assuming you have a deleteTransaction function
import { addCommas } from "@/lib/utils";

type Props = {
  transaction: Transaction;
  onUpdate: (updatedTransaction: Transaction) => void;
  onDelete: (transactionId: string) => void;
};

const TransactionItem = ({ transaction, onUpdate, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTransaction, setEditableTransaction] =
    useState<Transaction>(transaction);
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleUpdateTransaction = async () => {
    const { id, ...updateData } = editableTransaction;
    const { transaction: updatedTransaction, error } = await updateTransaction(
      id,
      updateData
    );

    if (error) {
      toast.error(error);
      return;
    }

    setIsEditing(false);
    onUpdate(updatedTransaction as Transaction);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    const { error } = await deleteTransaction(transaction.id);

    if (error) {
      toast.error(error);
      return;
    }

    onDelete(transaction.id);
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editableTransaction.text}
            onChange={(e) =>
              setEditableTransaction({
                ...editableTransaction,
                text: e.target.value,
              })
            }
          />
          <input
            type="number"
            value={editableTransaction.amount}
            onChange={(e) =>
              setEditableTransaction({
                ...editableTransaction,
                amount: parseFloat(e.target.value),
              })
            }
          />
          <button onClick={handleUpdateTransaction} className="save-btn">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-btn">
            Cancel
          </button>
        </>
      ) : (
        <>
          {transaction.text}
          <span>
            {sign}${addCommas(Math.abs(transaction.amount))}
          </span>
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-btn">
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TransactionItem;

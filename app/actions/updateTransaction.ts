"use server";
import { db } from "@/lib/db";
import { Transaction } from "@/types/transaction";
import { auth } from "@clerk/nextjs/server";

async function updateTransaction(
  transactionId: string,
  newTransactionData: Partial<Transaction>
): Promise<{
  transaction?: Transaction;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not authenticated" };
  }

  try {
    const existingTransaction = await db.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!existingTransaction) {
      return { error: "Transaction not found" };
    }

    if (existingTransaction.userId !== userId) {
      return { error: "Unauthorized to update this transaction" };
    }

    const updatedTransaction = await db.transaction.update({
      where: { id: transactionId },
      data: newTransactionData,
    });

    return { transaction: updatedTransaction };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default updateTransaction;

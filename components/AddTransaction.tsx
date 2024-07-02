"use client";
const AddTransaction = () => {
  return (
    <>
      <h3>Add transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
          <small>Negative - Expense, Positive - Income</small>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

import React from "react";

export default function BillSplit({
  selectedId,
  billInput,
  setBillInput,
  expense,
  setExpense,
  payer,
  setPayer,
  friendBill,
  onBillSplit,
}) {
  // handle submit
  function handleSubmit(e) {
    e.preventDefault();

    onBillSplit(payer === "you" ? friendBill : -expense);
  }
  return (
    <div className="billSplit">
      <h1 className="header">split a bill with {selectedId}</h1>

      <form className="form">
        <div>
          <label>💰 Bill Value </label>
          <input
            type="text"
            className="bill-input"
            value={billInput}
            onChange={(e) => setBillInput(e.target.value)}
          />
        </div>

        <div>
          <label>🧍 Your expense</label>
          <input
            type="text"
            className="bill-input"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>

        <div>
          <label>👬 {selectedId}'s expense </label>
          <input
            type="text"
            className="bill-input"
            disabled
            value={
              billInput === "" && expense === ""
                ? (friendBill = "")
                : `$${friendBill}`
            }
          />
        </div>

        <div>
          <label>🤑 Who is paying the bill? </label>
          <select
            className="bill-input"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value="you"> You</option>
            <option value="friend">{selectedId} </option>
          </select>
        </div>
        <button className="split-bill-btn" onClick={handleSubmit}>
          Split Bill
        </button>
      </form>
    </div>
  );
}

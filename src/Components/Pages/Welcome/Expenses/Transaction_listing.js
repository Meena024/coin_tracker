import Transaction_designing from "./Transaction_designing";

const Transaction_listing = () => {
  const myExpenses = [
    {
      amount: 50,
      category: "Entertainment",
      description: "Movie",
      expense_type: "debit",
      date: new Date(2025, 2, 22),
    },
    {
      amount: 25,
      category: "Entertainment",
      description: "Movie",
      expense_type: "credit",
      date: new Date(2025, 1, 22),
    },
  ];

  const list = myExpenses.map((trans, i) => (
    <Transaction_designing key={i} trans={trans} />
  ));

  return (
    <div className="mx-5">
      <h4
        style={{ maxWidth: "600px" }}
        className="mx-auto d-flex justify-content-between"
      >
        <span>Balance:</span>
        <span>$25</span>
      </h4>
      <div>{list}</div>
    </div>
  );
};

export default Transaction_listing;

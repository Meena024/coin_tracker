import Add_Expense_Icon from "../../../../Assets/Add_Expense_Icon.png";
import Transaction_listing from "./Transaction_listing";

const Transaction = () => {
  return (
    <div>
      <div className="m-3 mx-5 text-center">
        <h4
          className="d-flex justify-content-between align-items-center mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <span>EXPENSES</span>
          <img src={Add_Expense_Icon} alt="Add Expense" height="20" />
        </h4>

        <hr
          className="mx-auto border border-2 border-dark"
          style={{ maxWidth: "1000px" }}
        />
      </div>
      <Transaction_listing />
    </div>
  );
};

export default Transaction;

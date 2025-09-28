import { Col, Row } from "react-bootstrap";
import trans_classes from "../../../UI/Trans.module.css";

const Transaction_designing = ({ trans }) => {
  console.log(trans, trans.expense_type);
  return (
    <div
      className={
        trans.expense_type == "debit"
          ? trans_classes.trans_card_debit
          : trans_classes.trans_card_credit
      }
      onClick={() => alert("edit")}
    >
      <Row>
        <Col>
          <div>
            <span style={{ fontWeight: "bold" }}>{trans.category}</span> /{" "}
            {trans.description}
          </div>
          <div>
            {trans.date.getDate()}{" "}
            {trans.date.toLocaleString("default", { month: "long" })}{" "}
            {trans.date.getFullYear()}
          </div>
        </Col>
        <Col>
          <div
            style={{
              textAlign: "right",
              fontSize: "25px",
              fontWeight: "bolder",
            }}
          >
            ${trans.amount}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Transaction_designing;

import head_classes from "./UI/Head.module.css";
import logo from "../Assets/coin tracker.png";

const Header = () => {
  return (
    <div className={head_classes.head}>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "10%" }}>
              <img src={logo} style={{ height: 150 }} alt="logo" />
            </td>
            <td style={{ width: "50%" }}>
              <h1>Welcome to COIN TRACKER!</h1>
              <h2 className="ms-4">Track it, Know it, Own it.</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;

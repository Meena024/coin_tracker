import { Col, Row } from "react-bootstrap";
import edit_icon from "../../../Assets/Edit_icon1.png";
import head_classes from "../../UI/Head.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../ReduxStore/AuthSliceThunk";
import { authActions } from "../../ReduxStore/AuthSlice";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await dispatch(handleLogout());
      dispatch(authActions.setUser(null));
      navigate("/");
      console.log("logout");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className={head_classes.head}>
      <Row className="py-2">
        <Col xs={1} className="mx-3">
          <img
            src="https://media.istockphoto.com/id/629653980/photo/snowman.jpg?s=612x612&w=0&k=20&c=Mbsnibgwa0VuiwcJQLrzchvPqWnI9GIYVFdGPttx4eE="
            alt="..."
            height={60}
            width={60}
            className="rounded"
          ></img>
        </Col>
        <Col xs={5}>
          <h4>Hello,</h4>
          <h6>When you track it, You control it.</h6>
        </Col>
        <Col className="pt-2">
          {" "}
          <button className="p-2">
            <img
              src={edit_icon}
              alt="Edit Profile"
              height={30}
              data-toggle="modal"
            />
          </button>
        </Col>
        <Col className="d-flex justify-content-end me-3 p-2">
          <button onClick={logoutHandler}>Logout</button>
        </Col>
      </Row>
    </div>
  );
};

export default Head;

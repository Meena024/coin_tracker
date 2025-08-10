import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div
        style={{
          fontFamily: "Courier New",
          marginLeft: "3%",
          marginBottom: "5%",
        }}
      >
        <h1>Welcome to EXPENSE TRACKER!</h1>
        <h2 style={{ marginLeft: "50px" }}>Track it, Know it, Own it.</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <Card>
          {login && <Login />}
          {!login && <SignUp />}
          <div style={{ margin: "20px" }}>
            <Link onClick={() => setLogin(!login)}>
              {login && (
                <div>
                  Create a new Account?
                  <div>SIGN UP</div>
                </div>
              )}
              {!login && (
                <div>
                  Having an Account?<div>SIGN IN</div>
                </div>
              )}
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Auth;

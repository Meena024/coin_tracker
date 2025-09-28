import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
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
                Already having an Account?<div>SIGN IN</div>
              </div>
            )}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Auth;

import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    const login_details = {
      email: email,
      password: password,
    };
    console.log(login_details);
  };
  return (
    <>
      <h2>Sign In</h2>
      <Form onSubmit={loginHandler}>
        <div style={{ margin: "20px" }}>
          <input
            id="email"
            type="email"
            placeholder="E-Mail id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div style={{ margin: "20px" }}>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {/* {error && <div className="text-danger text-center mt-2">{error}</div>} */}

        <div style={{ margin: "5px" }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "SIGN IN"}
          </button>
        </div>
      </Form>
      <div>
        <Link
        // className={classes.link}
        // onClick={() => forgotPasswordHandler()}
        >
          Forgot Password
        </Link>
      </div>
    </>
  );
};

export default Login;

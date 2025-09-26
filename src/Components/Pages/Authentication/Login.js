import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import form_classes from "../../UI/Form.module.css";
import { useDispatch } from "react-redux";
import {
  handleLogin,
  handleForgotPassword,
} from "../../ReduxStore/AuthSliceThunk";

const Login = (e) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);

      if (!email.trim() || !password) {
        setError("Please enter both email and password.");
        return;
      }

      setLoading(true);
      const resultAction = await dispatch(handleLogin({ email, password }));
      setLoading(false);
      console.log("login result:", resultAction);
      if (handleLogin.fulfilled.match(resultAction)) {
        navigate("/welcome");
      } else {
        setError(resultAction.payload || resultAction.error?.message);
        console.error("Login failed:", resultAction);
      }
    },
    [dispatch, email, password, navigate]
  );

  const forgotPasswordHandler = async () => {
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      const resultAction = await dispatch(handleForgotPassword(email));

      if (handleForgotPassword.fulfilled.match(resultAction)) {
        alert("Password reset email sent! Please check your inbox.");
      } else {
        setError(resultAction.payload || resultAction.error?.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Forgot password error:", err);
    }
  };
  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={loginHandler} className={form_classes.form}>
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {error && <div className="text-danger text-center mt-2">{error}</div>}

        <div style={{ margin: "5px" }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </div>
      </Form>
      <div>
        <Link onClick={() => forgotPasswordHandler()}>Forgot Password</Link>
      </div>
    </>
  );
};

export default Login;

import { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { handleSignUp } from "../../ReduxStore/AuthSliceThunk";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import form_classes from "../../UI/Form.module.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signupHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);

      if (!email.trim() || !password || !confirmPassword) {
        setError("All fields are required.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      setLoading(true);
      const resultAction = await dispatch(
        handleSignUp({ email: email.trim(), password })
      );
      setLoading(false);

      if (handleSignUp.fulfilled.match(resultAction)) {
        navigate("/welcome");
      } else {
        setError(resultAction.payload || resultAction.error.message);
        console.error("Signup failed:", resultAction);
      }
    },
    [dispatch, email, password, confirmPassword, navigate]
  );

  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={signupHandler} className={form_classes.form}>
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

        <div style={{ margin: "20px" }}>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {error && <div className="text-danger text-center m-2">{error}</div>}

        <div style={{ margin: "5px" }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Sign Up"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default SignUp;

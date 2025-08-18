import { useState } from "react";
import { Form } from "react-bootstrap";
import form_classes from "../../UI/Form.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signupHandler = (e) => {
    e.preventDefault();
    const signup_details = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(signup_details);
  };
  return (
    <>
      <h2>Sign Up</h2>
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
            className="form-control"
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
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {/* {error && <div className="text-danger text-center mt-2">{error}</div>} */}

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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    navigate("/");
    // Add further validation or API call here
    console.log("Form Submitted", formData);
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
          <div className={styles.alreadyUser}>
            <span>Already have an Account?</span>
            <span className={styles.login} onClick={handleLogin}>
              Sign in
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

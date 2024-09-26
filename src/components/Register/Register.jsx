import { useState } from "react";
import "./Register.css";

function CreateAccount() {
  // States for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for showing error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation (you can extend this as needed)
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Simple success message (replace with API call logic)
    alert("Account created successfully!");

    // Clear form fields (optional)
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  return (
    <div className="create-account-container">
      <form className="create-account-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="create-account-button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;

import { useState } from 'react';
import './Login.css';

function Login() {
  // States for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for showing error message
  const [errorMessage, setErrorMessage] = useState('');

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Example validation (replace with your own logic)
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      // Proceed with your login logic (e.g., API calls, navigation)
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Auth.css";

function Login({ onLogin }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await API.post("/login", {
        email,
        password
      });

      onLogin(response.data.token);

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.error ||
        "Invalid email or password"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="auth-page">

      <div className="auth-glow auth-glow-left"></div>
      <div className="auth-glow auth-glow-right"></div>


      <div className="auth-wrapper">

        {/* Logo */}

        <div className="auth-logo">

          <span>⚡</span>

          <span>AgentIntel</span>

        </div>


        {/* Card */}

        <div className="auth-card">

          <div className="auth-header">

            <p className="auth-tag">
              AI MARKET INTELLIGENCE
            </p>

            <h1>
              Welcome back
            </h1>

            <p>
              Sign in to continue to your intelligence workspace.
            </p>

          </div>


          {error && (

            <div className="auth-error">
              {error}
            </div>

          )}


          <form onSubmit={handleLogin}>

            <div className="auth-field">

              <label>Email</label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>


            <div className="auth-field">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>


            <button
              className="auth-submit"
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Signing in..."
                : "Sign in →"}

            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-switch">

            Don't have an account?

            <button
              type="button"
              onClick={() => navigate("/register")}
            >
              Create account
            </button>

          </p>

        </div>


        <p className="auth-footer">
          Powered by AI • Real-time intelligence • Secure access
        </p>

      </div>

    </div>

  );
}

export default Login;
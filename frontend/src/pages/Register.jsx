import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      await API.post("/register", {
        name,
        email,
        password
      });

      alert("Registration successful!");

      navigate("/login");

    } catch (err) {

      setError(
        err.response?.data?.error ||
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>AgentIntel</h1>

        <h2>Create Account</h2>

        <p>
          Create an account to use AgentIntel.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>

        <p>

          Already have an account?

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="link-button"
          >
            Login
          </button>

        </p>

      </div>

    </div>

  );
}

export default Register;
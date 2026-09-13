import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        ⚡ AgentIntel
      </div>

      <div className="nav-links">

        <button onClick={() => navigate("/")}>
          Dashboard
        </button>

        <button>
          Reports
        </button>

        <button>
          History
        </button>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;
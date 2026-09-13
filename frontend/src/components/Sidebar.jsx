import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/"
    },
    {
      name: "Research",
      path: "/research"
    },
    {
      name: "Competitors",
      path: "/competitors"
    },
    {
      name: "SWOT Analysis",
      path: "/swot"
    },
    {
      name: "Agents",
      path: "/agents"
    },
    {
      name: "Agent Analytics",
      path: "/analytics"
    },
    {
      name: "Reports",
      path: "/reports"
    },
    {
      name: "Settings",
      path: "/settings"
    }
  ];


  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

    window.location.reload();

  };


  return (

    <aside className="sidebar">

      <div className="sidebar-logo">
        <span>⚡</span>
        <span>AgentIntel</span>
      </div>


      <div className="sidebar-section">

        <p className="sidebar-label">
          MAIN
        </p>

        {menuItems.slice(0, 4).map((item) => (

          <button
            key={item.path}
            className={
              location.pathname === item.path
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>

        ))}

      </div>


      <div className="sidebar-section">

        <p className="sidebar-label">
          AI SYSTEM
        </p>

        {menuItems.slice(4, 6).map((item) => (

          <button
            key={item.path}
            className={
              location.pathname === item.path
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>

        ))}

      </div>


      <div className="sidebar-section">

        <p className="sidebar-label">
          WORKSPACE
        </p>

        {menuItems.slice(6).map((item) => (

          <button
            key={item.path}
            className={
              location.pathname === item.path
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>

        ))}

      </div>


      <div className="sidebar-bottom">

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </aside>

  );
}

export default Sidebar;
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const handleLogin = (newToken) => {

    localStorage.setItem("token", newToken);

    setToken(newToken);

  };

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={
            token
              ? <Navigate to="/" />
              : <Login onLogin={handleLogin} />
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            token
              ? <Navigate to="/" />
              : <Register />
          }
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            token
              ? <Dashboard />
              : <Navigate to="/login" />
          }
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
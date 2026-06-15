import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";
import "./styles/dashboard.css";
import "./styles/responsive.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <App />

    <Toaster

      position="top-right"

      toastOptions={{

        duration:3000,

        style:{

          background:"#111111",

          color:"#ffffff",

          border:"1px solid #27272a"

        }

      }}

    />

  </React.StrictMode>

);
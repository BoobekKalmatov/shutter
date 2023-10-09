import React from "react";
import Sidebar from "./sidebar/Sidebar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      {children}
    </div>
  );
}

export default Layout;

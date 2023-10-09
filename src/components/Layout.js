import React from "react";
import "./Layout.css";
import Sidebar from './Sidebar/Sidebar'

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      {children}
    </div>
  );
}

export default Layout;
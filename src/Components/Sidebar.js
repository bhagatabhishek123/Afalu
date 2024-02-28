import React, { Component } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div class="offcanvas offcanvas-start" id="sidebar">
        <div class="offcanvas-header">
          <h1 class="offcanvas-title">AFOLU</h1>
          <p>Carbon Calculator</p>
        </div>
        <div class="offcanvas-body"></div>
      </div>
    </>
  );
};

export default Sidebar;

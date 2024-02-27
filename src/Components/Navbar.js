import React, { Component } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="w3-sidebar w3-light-grey w3-bar-block">
        <h2 class="w3-bar-item">
          AFOLU <span>Carbon Calculator</span>
        </h2>
      </div>
      <nav class="navbar navbar-inverse navbar-dark bg-dark">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li class="">
              <a href="#">
                <i class="fa-solid fa-folder"></i> Projects
              </a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class="fa-solid fa-question"></i> Support
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class="fa-solid fa-circle-info"></i> Info
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Option</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div class="panel panel-default">
        <div class="panel-body">Shared Projects</div>
      </div>
      <div className="heading">
        <h2 className="name">My Project</h2>
      </div>
      <hr></hr>
      <div className="creation">
        <p>You don't have any projects!</p>
        <button type="button" class="btn btn-success btn-lg">
          + Create Project
        </button>
      </div>
    </>
  );
};

export default Navbar;

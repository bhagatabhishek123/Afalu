import React, { Component } from "react";
import "./Navbar.css";

import Project from "./Project";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-inverse navbar-dark bg-dark">
        <div class="">
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
    </>
  );
};

export default Navbar;

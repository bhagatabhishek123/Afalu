import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./ProjectCreation.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const ProjectCreation = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <Sidebar></Sidebar>
          </div>
          <div class="col-sm-9">
            <Navbar></Navbar>
            <div class="panel panel-default">
              <div class="panel-body">
                <h3>
                  <i class="fa-regular fa-folder-open"></i> Shared Projects
                </h3>
              </div>
            </div>
            <div id="my-project">
              <p>
                <i class="fa-solid fa-folder"></i> My projects
              </p>
            </div>
            <hr></hr>
            <div className="button">
              <p>You don't have any projects!</p>
              <Link to="/project">
                <button type="button" class="btn btn-success btn-lg">
                  + Create Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCreation;

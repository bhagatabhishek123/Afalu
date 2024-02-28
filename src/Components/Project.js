import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Project.css";
import { Label } from "@material-ui/icons";

const Project = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <Sidebar></Sidebar>
          </div>
          <div class="col-sm-9">
            <Navbar></Navbar>
            <div className="title">
              <p>Welcome,</p>
              <h2>Create A New Project</h2>
              <hr></hr>
            </div>
            <div class="form-group row">
              <label for="name" class="col-sm-4 col-form-label">
                Name
              </label>
              <div class="col-sm-6">
                <input type="name" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label">
                Is this project reporting to USAID?
              </label>
              <div class="col-sm-6">
                <select
                  class="form-select form-select-sm"
                  aria-label=".Default select example"
                >
                  <option selected></option>
                  <option value="1">Unknown</option>
                  <option value="2">Yes</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label">
                Reportig Year
              </label>
              <div class="col-sm-6">
                <input type="password" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label">
                Group
              </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label">
                Description
              </label>
              <div class="col-sm-6">
                <textarea class="form-control" rows="5"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

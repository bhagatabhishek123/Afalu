import "./App.css";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import ProjectCreation from "./Components/ProjectCreation";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectCreation />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

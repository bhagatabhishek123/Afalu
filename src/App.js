import "./App.css";
import Navbar from "./Components/Navbar";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;

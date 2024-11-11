import React from "react";
import Home from "./Pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
// import ProjectDetail from "./Pages/Project/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:projectId" element={<ProjectDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

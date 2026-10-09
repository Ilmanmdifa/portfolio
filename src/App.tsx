import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetail";
import About from "./pages/About";

function NotFound() {
  return (
    <div className="p-12 text-center">
      Page not found — <Link to="/">back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

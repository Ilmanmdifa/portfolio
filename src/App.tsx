import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetail";
import About from "./pages/About";

// TODO skeleton for detail project,
// TODO create thumbnail and image for demo
// TODO burger menu for mobile, footer optimize for mobile
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <div className="p-12 text-center">
                Page not found — <Link to="/">back to Home</Link>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

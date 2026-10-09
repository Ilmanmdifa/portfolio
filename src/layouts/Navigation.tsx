import { useState } from "react";
import { NavLink } from "../components/Nav/NavLink";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MAX_DROPDOWN_PROJECTS = 5;

const Navigation = () => {
  const { pathname } = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // Close every menu on route change (adjust-during-render pattern:
  // safe because it runs conditionally, no loop)
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  // Resume URL lives outside the SPA router, so an empty value renders
  // no link instead of falling back to "/".
  const resumeUrl = import.meta.env.VITE_RESUME_URL as string | undefined;

  // Order follows the data array (manual curation, same as homepage).
  // Single source of truth: reorder projects in the data file only.
  const visibleProjects = projects.slice(0, MAX_DROPDOWN_PROJECTS);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="md:px-42 px-5 py-4 md:py-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* LOGO */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#6f76fd] transition-colors"
          >
            Ilman<span className="text-[#6f76fd]">.</span>Dev
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-2">
            {/* Dropdown for Projects */}
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className="relative"
            >
              <button className="px-3 py-2 text-gray-700 hover:text-[#6f76fd] font-medium transition-colors rounded-lg hover:bg-gray-100">
                Projects
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-0 w-72 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg border border-gray-200 z-10 overflow-hidden">
                  <div className="p-2">
                    {visibleProjects.map((project, index) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        onClick={() => setDropdownOpen(false)}
                        className="flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#6f76fd] text-sm">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-1">
                          {project.description}
                        </p>
                        {index < visibleProjects.length - 1 && (
                          <div className="border-b border-gray-100 mt-2" />
                        )}
                      </Link>
                    ))}
                    {projects.length > MAX_DROPDOWN_PROJECTS && (
                      <a
                        href="/#project-section"
                        onClick={() => setDropdownOpen(false)}
                        className="block p-3 rounded-lg text-sm font-semibold text-[#6f76fd] hover:bg-gray-50 transition-colors text-center"
                      >
                        View all {projects.length} projects →
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {resumeUrl && (
              <NavLink name="Resume" href={resumeUrl} targetLink="_blank" />
            )}
            <NavLink name="About" href="/about" />
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#6f76fd] transition-colors"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faXmark : faBars}
              size="lg"
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-gray-200">
            {/* Mobile Projects Dropdown */}
            <div>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#6f76fd] font-medium transition-colors rounded-lg hover:bg-gray-100"
              >
                Projects {isDropdownOpen ? "▼" : "▶"}
              </button>
              {isDropdownOpen && (
                <div className="space-y-1 pl-3 pr-2 py-2">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-[#6f76fd] hover:bg-gray-50 rounded transition-colors"
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resume Link */}
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-gray-700 hover:text-[#6f76fd] font-medium transition-colors rounded-lg hover:bg-gray-100"
              >
                Resume
              </a>
            )}

            {/* Mobile About Link */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-gray-700 hover:text-[#6f76fd] font-medium transition-colors rounded-lg hover:bg-gray-100"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

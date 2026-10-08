import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Content/Card";
import { projects } from "../data/projects";

const FEATURED_COUNT = 4;

const Content = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, FEATURED_COUNT);
  return (
    <main className="w-full px-5 py-16 md:px-8 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>

        {/* PROJECTS GRID */}
        <section
          id="project-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {visibleProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>

        {projects.length > FEATURED_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95"
              aria-expanded={showAll}
            >
              {showAll
                ? "Show less"
                : `View all ${projects.length} projects`}
            </button>
          </div>
        )}

        {/* FOOTER CTA */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <Link
            to="mailto:ilmanmdifa63@gmail.com"
            className="inline-block px-8 py-3 bg-[#6f76fd] text-white rounded-lg font-medium hover:bg-[#5a63e8] transition-all hover:shadow-lg active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Content;

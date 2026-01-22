import { Link } from "react-router-dom";
import Card from "../components/Content/Card";
import { projects } from "../data/projects";

const Content = () => {
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
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>

        {/* FOOTER CTA */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <Link
            to="/about"
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

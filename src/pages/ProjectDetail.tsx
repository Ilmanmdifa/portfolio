import { useParams } from "react-router-dom";
import Navigation from "../layouts/Navigation";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [imageLoaded, setImageLoaded] = useState(false);
  usePageTitle({
    title: project ? project.title : "Project Not Found",
    description: project
      ? project.description || "Check out this project"
      : "Project not found",
    ogImage: project?.thumbnailImage,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="p-12 text-center">Project not found</div>
      </>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return { badge: "bg-green-100 text-green-700", label: "✓ Completed" };
      case "in-development":
        return {
          badge: "bg-blue-100 text-blue-700",
          label: "⚙ In Development",
        };
      case "planned":
        return { badge: "bg-gray-100 text-gray-700", label: "○ Planned" };
      default:
        return { badge: "bg-gray-100 text-gray-700", label: "○ Unknown" };
    }
  };

  const statusColors = getStatusColor(project.status);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <div className="relative w-full h-96 bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
          {!imageLoaded && (
            <div className="w-full h-full animate-pulse bg-gray-200" />
          )}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20">
          {/* HEADER */}
          <div className="mb-16">
            {/* STATUS BADGE */}
            {/* STATUS BADGE ONLY - Clean & Minimal */}
            <div className="mb-4">
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${statusColors.badge}`}
              >
                {statusColors.label}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* META INFO */}
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                  Version
                </p>
                <p className="text-gray-900 font-semibold">{project.version}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                  Created
                </p>
                <p className="text-gray-900 font-semibold">
                  {new Date(project.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                  Status
                </p>
                <p
                  className={`font-semibold ${statusColors.badge.split(" ")[1]}`}
                >
                  {statusColors.label.split(" ").slice(1).join(" ")}
                </p>
              </div>
            </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-200">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* SECTIONS */}
          <div className="space-y-16">
            {/* OVERVIEW */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* FLOWS/USER JOURNEY */}
            {project.flows && project.flows.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  User Flows
                </h2>
                <div className="space-y-3">
                  {project.flows.map((flow, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6f76fd] text-white text-sm font-semibold flex-shrink-0 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1 group-hover:text-gray-900 transition-colors">
                        {flow}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TECH STACK */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#6f76fd] mr-3" />
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURES */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-700 group"
                  >
                    <span className="text-[#6f76fd] font-bold mt-1 group-hover:scale-125 transition-transform">
                      ✓
                    </span>
                    <span className="group-hover:text-gray-900 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CHALLENGES */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.challenges}
              </p>
            </section>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#6f76fd] text-white rounded-lg font-medium hover:bg-[#5a63e8] transition-all hover:shadow-lg active:scale-95"
                >
                  Live Demo →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

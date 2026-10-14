import { useEffect, useMemo, useState } from "react";
import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import Card from "../components/Content/Card";
import { projects } from "../data/projects";
import { usePageTitle } from "../hooks/usePageTitle";

type StatusFilter = "all" | "completed" | "in-development";

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "in-development", label: "In Development" },
];

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [page, setPage] = useState(1);
  usePageTitle({
    title: "Projects",
    description:
      "Browse every project: web apps, games, and experiments with live demos and source code.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      if (status !== "all" && project.status !== status) return false;
      if (!term) return true;
      const haystack = [project.title, project.description, ...project.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query, status]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagedProjects = filteredProjects.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const updateStatus = (value: StatusFilter) => {
    setStatus(value);
    setPage(1);
  };

  const goToPage = (value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              All Projects
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {projects.length} projects — web apps, games, and experiments.
              Each one has a detail page with flows, tech stack, and links.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input
              type="search"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
              placeholder="Search title, description, or tag..."
              aria-label="Search projects"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6f76fd] focus:border-transparent"
            />
            <div className="flex gap-2" role="group" aria-label="Filter by status">
              {STATUS_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => updateStatus(filter.value)}
                  aria-pressed={status === filter.value}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-all active:scale-95 ${
                    status === filter.value
                      ? "bg-[#6f76fd] text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          {filteredProjects.length > 0 ? (
            <>
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pagedProjects.map((project) => (
                  <Card key={project.id} project={project} />
                ))}
              </section>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => goToPage(safePage - 1)}
                    disabled={safePage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                  >
                    ← Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        aria-current={safePage === pageNumber ? "page" : undefined}
                        className={`w-10 h-10 rounded-lg font-medium text-sm transition-all active:scale-95 ${
                          safePage === pageNumber
                            ? "bg-[#6f76fd] text-white"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => goToPage(safePage + 1)}
                    disabled={safePage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 border border-dashed border-gray-300 rounded-xl">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                No projects match
              </p>
              <p className="text-gray-600 mb-6">
                Try a different keyword or status filter.
              </p>
              <button
                onClick={() => {
                  updateQuery("");
                  updateStatus("all");
                }}
                className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

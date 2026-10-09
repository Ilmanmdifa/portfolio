import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";

const resumeUrl = import.meta.env.VITE_RESUME_URL as string | undefined;

export default function About() {
  const [activeTab, setActiveTab] = useState<"journey" | "skills">("journey");
  usePageTitle({
    title: "About Me",
    description:
      "Learn about my journey, skills, and experience in web development.",
    ogImage: "/og-about.jpg",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: [
        "React (Hooks, Zustand)",
        "Next.js (App Router)",
        "TypeScript (ES6+)",
        "Tailwind CSS",
        "Semantic HTML",
        "Responsive Mobile-First",
        "Vite",
        "React Router",
        "React Hook Form + Zod",
        "Radix UI",
        "Recharts",
        "Accessibility (ARIA)",
      ],
    },
    {
      category: "Backend",
      items: [
        "PHP",
        "Laravel (Blade, Policies, Form Requests)",
        "Bagisto",
        "REST API Integration",
        "Node.js (Basic)",
        "Convex",
        "PostgreSQL + Prisma",
        "SQLite + PHPUnit",
        "Firebase Auth + Firestore",
        "Stack Auth / Better Auth",
      ],
    },
    {
      category: "Practices & Tools",
      items: [
        "Git + Branching Workflow",
        "Agile Scrum",
        "Clean Code + Refactoring",
        "Debugging (Prod)",
        "ESLint",
        "Figma to Wireframe",
        "Postman",
        "Vercel + Netlify",
        "OpenSpec Reviews",
      ],
    },
  ];

  const timeline = [
    {
      year: "2026",
      title: "Independent Full-stack Projects — Present",
      desc: "Back to independent work after EDP; applying Laravel/Bagisto discipline to React, Next.js, and team-todo collaboration builds",
    },
    {
      year: "2026",
      title: "Fullstack Engineer (EDP) — gits.id",
      desc: "Apr to Jul 2026 program; spec + interactive wireframe from Figma; fixed production bugs on product filter, admin permissions, and role-based rendering; adapted from JavaScript to PHP/Laravel/Bagisto; Agile Scrum with Git branching and OpenSpec reviews",
    },
    {
      year: "2025",
      title: "Fullstack JavaScript Bootcamp — harisenin",
      desc: "Project-based modern JavaScript, React, and Next.js with reusable component architecture",
    },
    {
      year: "2024",
      title: "React Developer Path — Dicoding",
      desc: "React basics to advanced through hands-on projects including auth, REST API, localization, and theming",
    },
    {
      year: "2024",
      title: "Informatics Engineering Graduate",
      desc: "Cybersecurity specialization; phishing-awareness research informing secure-by-default coding",
    },
    {
      year: "2022",
      title: "Web Developer — Apotek Sumber Berkah",
      desc: "Online-store CMS with CodeIgniter 3 + Bootstrap 4; integrated online/offline ordering flow",
    },
  ];

  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Fullstack developer with experience building and maintaining web
              applications using{" "}
              <span className="text-[#6f76fd] font-semibold">
                JavaScript, React, Next.js, PHP, Laravel, and Bagisto
              </span>
              . Comfortable fixing production bugs and shipping role-based
              features in live e-commerce systems.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-xl border border-gray-200 mb-20">
            <p className="text-gray-700 leading-relaxed text-lg">
              I have hands-on experience developing responsive frontends and
              structured backend services, including production debugging on
              product filters, admin-role permissions, and role-based UI
              rendering. My cybersecurity specialization provides a strong
              academic foundation in secure systems and informs my approach to
              writing clean, robust code.
            </p>
          </div>

          {/* TABS */}
          <div className="mb-20">
            <div className="flex gap-4 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("journey")}
                className={`pb-4 px-1 font-semibold transition-all ${
                  activeTab === "journey"
                    ? "text-[#6f76fd] border-b-2 border-[#6f76fd]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Journey
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`pb-4 px-1 font-semibold transition-all ${
                  activeTab === "skills"
                    ? "text-[#6f76fd] border-b-2 border-[#6f76fd]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Skills
              </button>
            </div>

            {/* JOURNEY TAB */}
            {activeTab === "journey" && (
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[#6f76fd] mt-2 group-hover:scale-125 transition-transform" />
                      {index !== timeline.length - 1 && (
                        <div className="w-0.5 h-20 bg-linear-to-b from-[#6f76fd] to-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className="text-sm font-semibold text-[#6f76fd] mb-1">
                        {item.year}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#6f76fd] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SKILLS TAB */}
            {activeTab === "skills" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-gray-200 rounded-lg hover:border-[#6f76fd] hover:bg-gray-50 transition-all group"
                  >
                    <h3 className="font-semibold text-gray-900 mb-4 group-hover:text-[#6f76fd] transition-colors">
                      {skill.category}
                    </h3>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6f76fd]" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 pb-20 border-b border-gray-200">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                Background
              </p>
              <p className="text-gray-700 leading-relaxed">
                Production e-commerce debugging plus academic cybersecurity
                background shape my interest in role-based access and
                responsible data handling.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                Philosophy
              </p>
              <p className="text-gray-700 leading-relaxed">
                I value clean code, user-centered design, and continuous
                learning, and I aim to build systems that are reliable,
                maintainable, and easy to evolve.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#6f76fd] text-white rounded-lg font-medium hover:bg-[#5a63e8] transition-all hover:shadow-lg active:scale-95 text-center"
              >
                Download Resume
              </a>
            )}
            <a
              href="mailto:ilmanmdifa63@gmail.com"
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

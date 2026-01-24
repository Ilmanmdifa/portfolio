import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

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
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "CSS",
        "Vite",
        "React Router",
        "React Hook Form",
        "Radix UI",
        "Recharts",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Firebase",
        "Convex",
        "Prisma ORM",
        "PostgreSQL",
        "Stack Auth",
        "Better Auth",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "REST APIs",
        "Vercel",
        "ESLint",
        "Figma",
        "Postman",
      ],
    },
  ];

  const timeline = [
    {
      year: "2026",
      title: "Independent Full-stack Projects",
      desc: "Building and shipping personal web applications to strengthen real-world development skills",
    },
    {
      year: "2025",
      title: "Fullstack JavaScript Bootcamp in harisenin",
      desc: "Learn by building projects using modern JavaScript technologies",
    },
    {
      year: "2024",
      title: "React Developer Path in Dicoding",
      desc: "Learn from basics to advanced React development through hands-on projects",
    },
    {
      year: "2024",
      title: "Informatics Engineering Graduate",
      desc: "Learn web development fundamentals",
    },
    {
      year: "2023",
      title: "Cybersecurity Research for thesis",
      desc: "Phishing awareness study with real-world simulations",
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
              Full-stack JavaScript developer focused on building{" "}
              <span className="text-[#6f76fd] font-semibold">
                reliable, maintainable, and user-centered
              </span>{" "}
              web applications.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-xl border border-gray-200 mb-20">
            <p className="text-gray-700 leading-relaxed text-lg">
              I have hands-on experience developing responsive frontends and
              structured backend services. During my studies, I chose a
              cybersecurity specialization, which provided a strong academic
              foundation in secure systems and informs my approach to writing
              clean, robust code.
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
                Academic coursework in cybersecurity, including phishing
                awareness, shaped my interest in secure application design and
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
            <Link
              to={import.meta.env.VITE_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6f76fd] text-white rounded-lg font-medium hover:bg-[#5a63e8] transition-all hover:shadow-lg active:scale-95 text-center"
            >
              Download Resume
            </Link>
            <Link
              to="mailto:ilmanmdifa63@gmail.com"
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

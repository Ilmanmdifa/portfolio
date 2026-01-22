import { useState } from "react";
import heroWebDev from "../assets/images/hero-webdev-compressed.jpg";
import arrowDown from "../assets/images/content/arrow-down-solid-full.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full px-5 py-7 md:px-42 md:py-20 min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-6xl">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 md:gap-8 md:w-[50%]">
          {/* GREETING */}
          <div>
            <p className="text-[#6f76fd] text-sm font-semibold uppercase tracking-widest mb-2">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Ilman M. Difa
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            A{" "}
            <span className="text-[#6f76fd] font-semibold">
              Junior Fullstack Developer
            </span>{" "}
            passionate about building
            <span className="text-[#6f76fd] font-semibold">
              {" "}
              clean, responsive
            </span>{" "}
            web applications. Let's transform ideas into reality.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://drive.google.com/file/d/10mr5z-jNuIh9PjEXqvUwlgum7WxTvM3h/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6f76fd] text-white rounded-lg font-medium hover:bg-[#5a63e8] transition-all hover:shadow-lg active:scale-95"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span>Resume</span>
            </a>

            <a
              href="#project-section"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all active:scale-95"
            >
              <span>View Work</span>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4 pt-4">
            <p className="text-sm text-gray-600 font-medium">Follow me:</p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/ilmanmdifa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#6f76fd] transition-all hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="https://github.com/ilmanmdifa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#6f76fd] transition-all hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#6f76fd] transition-all hover:scale-110 active:scale-95"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[50%] relative">
          {/* SKELETON */}
          {!imageLoaded && (
            <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-xl" />
          )}

          {/* IMAGE */}
          <img
            src={heroWebDev}
            alt="web dev"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            className={`w-full h-auto rounded-xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <div className="mt-16 md:mt-20 text-center">
        <a
          href="#project-section"
          aria-label="Scroll Down"
          className="inline-block"
        >
          <img
            src={arrowDown}
            alt="scroll down"
            className="w-6 h-6 animate-bounce hover:scale-110 transition-transform cursor-pointer"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

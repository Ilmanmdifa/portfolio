import heroWebDev from "../assets/images/hero-webdev.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-full px-5 py-7 md:px-42 md:py-15 ">
        <div className="flex items-center">
          <div className="flex flex-col gap-5 md:gap-20 md:w-[50%]">
            <div>
              <h1 className="text-5xl font-bold">Ilman Muhammad Difa</h1>
            </div>
            <div>
              <p className="text-[1.25rem] font-light">
                A{" "}
                <span className="text-[#5a3efd] font-semibold">
                  Fullstack Developer Enthusiast
                </span>{" "}
                with the goal to bring creative ideas to life and contribute to
                <span className="text-[#5a3efd] font-semibold">
                  {" "}
                  innovative projects
                </span>
                . Let’s build something amazing together!
              </p>
              <div className="flex gap-8 mt-5">
                <button className="p-5 cursor-pointer border rounded-2xl border-[#6f76fd] hover:bg-[#6f76fd] text-[#5a3efd] hover:text-amber-50">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faFileLines} />
                    <span className="text-lg">Resume</span>
                  </div>
                </button>
                <div className="flex gap-2 items-center">
                  <a className="w-18 h-18 p-5 cursor-pointer rounded-full bg-neutral-900 text-amber-50 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </a>
                  <a className="w-18 h-18 p-5 cursor-pointer rounded-full bg-neutral-900 text-amber-50 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4 hidden md:block">
            <img src={heroWebDev} alt="web dev" className="w-[600px] h-auto" />
          </div>
        </div>
        <div className="text-6xl mt-5 text-gray-700">
          <a href="#">⬇</a>
        </div>
      </section>
    </>
  );
};

export default Hero;

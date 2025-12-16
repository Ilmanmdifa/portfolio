import { NavLink } from "../components/Nav/NavLink";

const Navigation = () => {
  return (
    <nav>
      <div className="flex md:px-42 px-5 py-7 gap-2 border-b border-[#F1F1F1] shadow-sm items-center justify-between">
        <a
          href=""
          className="text-2xl font-semibold text-gray-600 hover:text-[#6f76fd]"
        >
          Ilman | Web Dev
        </a>
        <ul className="flex">
          <NavLink name="PROJECTS" />
          <NavLink name="RESUME" />
          <NavLink name="ABOUT" />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

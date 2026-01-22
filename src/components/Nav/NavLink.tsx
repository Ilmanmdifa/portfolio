import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  name: string;
  href?: string;
  targetLink?: string;
}

export const NavLink = ({
  name,
  href = "/",
  targetLink = "",
}: NavLinkProps) => {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg font-medium transition-all ${
          isActive
            ? "text-[#6f76fd] bg-blue-50"
            : "text-gray-700 hover:text-[#6f76fd] hover:bg-gray-100"
        }`
      }
      to={href}
      target={targetLink ? "_blank" : "_self"}
    >
      {name}
    </RouterNavLink>
  );
};

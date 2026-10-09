import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  name: string;
  href: string;
  targetLink?: string;
}

const baseClass = "px-3 py-2 rounded-lg font-medium transition-all";
const activeClass = "text-[#6f76fd] bg-blue-50";
const idleClass = "text-gray-700 hover:text-[#6f76fd] hover:bg-gray-100";

export const NavLink = ({ name, href, targetLink = "" }: NavLinkProps) => {
  if (!href) return null;

  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target={targetLink ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`${baseClass} ${idleClass}`}
      >
        {name}
      </a>
    );
  }

  return (
    <RouterNavLink
      className={({ isActive }) =>
        `${baseClass} ${isActive ? activeClass : idleClass}`
      }
      to={href}
      end
      target={targetLink ? "_blank" : "_self"}
    >
      {name}
    </RouterNavLink>
  );
};

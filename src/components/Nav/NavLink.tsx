interface NavLinkProps {
  name: string;
  href?: string;
}
export const NavLink = ({ name, href = "#" }: NavLinkProps) => {
  return (
    <li className="p-3 text-[#333333ad] hover:text-[#6f76fd]">
      <a href={href}>{name}</a>
    </li>
  );
};

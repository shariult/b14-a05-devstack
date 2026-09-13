import NavLink from "./NavLink";

type NavListProps = {
  isOpen: boolean;
};

function NavList(props: NavListProps) {
  let classes = "scale-y-0 md:scale-y-100";

  if (props.isOpen) {
    classes = "scale-y-100";
  }

  return (
    <ul
      className={`flex flex-col md:flex-row md:flex-wrap md:gap-6 absolute top-full left-0 md:static bg-gray-50 md:bg-transparent w-full md:w-auto transition origin-top-left ${classes}`}
    >
      <li>
        <NavLink href="#">Home</NavLink>
      </li>
      <li>
        <NavLink href="#">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#">About</NavLink>
      </li>
      <li>
        <NavLink href="#">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavList;

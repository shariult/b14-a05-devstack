import { useState } from "react";
import humburgerImg from "../../assets/hamburger.png";
import logoImg from "../../assets/logo-text.png";
import NavCta from "../ui/nav/NavCta";
import NavList from "../ui/nav/NavList";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  function navToggleHandler(): void {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="flex justify-center items-center w-full bg-white sticky top-0 border-b border-b-gray-100 shadow-md">
      <div className="container p-4 flex justify-between items-center">
        <button className="cursor-pointer md:hidden" onClick={navToggleHandler}>
          <img src={humburgerImg} alt="mobile menu" className="w-6" />
        </button>

        <img
          src={logoImg}
          alt="company logo"
          className="max-w-20 md:max-w-32"
        />

        <NavList isOpen={isOpen} />

        <NavCta />
      </div>
    </nav>
  );
}

export default MainNav;

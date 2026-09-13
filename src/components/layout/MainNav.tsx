import React from "react";
import humburgerImg from "../../assets/hamburger.png";
import logoImg from "../../assets/logo-text.png";

function MainNav() {
  return (
    <nav>
      <div className="container">
        <button>
          <img src={humburgerImg} alt="mobile menu" />
        </button>
        <img src={logoImg} alt="company logo" />
      </div>
    </nav>
  );
}

export default MainNav;

import FooterLink from "../ui/footer/FooterLink";
import footerImg from "../../assets/logo-text.png";
import FooterSocial from "../ui/footer/FooterSocial";
import FooterNavLink from "../ui/footer/FooterNavLink";

function Footer() {
  return (
    <footer className="px-4 font-jakarta">
      {/* footer top */}
      <div className="px-6 py-12 md:flex md:gap-6 md:justify-between">
        {/* footer col */}
        <div className="flex flex-col justify-center items-center gap-4 md:items-start">
          <img src={footerImg} alt="banner stack" className="max-w-40" />
          <p className="text-center text-gray-500 md:text-left max-w-[40ch]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-6 items-center">
            <FooterSocial>Github</FooterSocial>
            <span className="inline-block w-2 h-2 bg-gray-300 rounded-full md:hidden"></span>
            <FooterSocial>Twitter</FooterSocial>

            <span className="inline-block w-2 h-2 bg-gray-300 rounded-full md:hidden"></span>
            <FooterSocial>LinkedIn</FooterSocial>
          </div>
        </div>

        {/* footer col */}
        <div className="hidden md:flex md:flex-col md:gap-4">
          <h4 className="text-md uppercase font-bold">Product</h4>

          <div className="flex flex-col gap-2">
            <FooterNavLink href="#">Home</FooterNavLink>
            <FooterNavLink href="#">Technologies</FooterNavLink>
            <FooterNavLink href="#">Projects</FooterNavLink>
          </div>
        </div>

        {/* footer col */}
        <div className="hidden md:flex md:flex-col md:gap-4">
          <h4 className="text-md uppercase font-bold">Company</h4>

          <div className="flex flex-col gap-2">
            <FooterNavLink href="#">About</FooterNavLink>
            <FooterNavLink href="#">Contact</FooterNavLink>
            <FooterNavLink href="#">Careers</FooterNavLink>
          </div>
        </div>

        {/* footer col */}
        <div className="hidden md:flex md:flex-col md:gap-4">
          <h4 className="text-md uppercase font-bold">Legal Service</h4>

          <div className="flex flex-col gap-2">
            <FooterNavLink href="#">Privacy Policy</FooterNavLink>
            <FooterNavLink href="#">Terms of Use</FooterNavLink>
          </div>
        </div>
      </div>

      {/* footer copy */}
      <div className="flex justify-between py-4 border-t border-t-gray-100">
        <p className="text-sm text-gray-400">
          &copy; 2026 Dev Stack. All rights reserved.
        </p>
        <ul className="flex gap-2">
          <li>
            <FooterLink href="#">Privacy</FooterLink>
          </li>
          <li>
            <FooterLink href="#">Terms</FooterLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

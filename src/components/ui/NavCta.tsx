function NavCta() {
  return (
    <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center items-center">
      <a
        href="#"
        className="inline-block text-md font-bold font-inter text-gray-700 hover:text-brand-pr"
      >
        Sign In
      </a>
      <a
        href="#"
        className="inline-block px-8 py-2 bg-brand-pr hover:bg-pink-500 text-md text-gray-50 font-jakarta font-bold rounded-full "
      >
        Sign Up
      </a>
    </div>
  );
}

export default NavCta;

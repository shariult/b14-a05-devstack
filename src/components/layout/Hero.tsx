import ButtonLink from "../ui/ButtonLink";
import heroImg from "../../assets/banner-stack.png";

function Hero() {
  return (
    <header>
      <div className="container mx-auto px-4 py-10 flex flex-col justify-center md:flex-row">
        {/* hero left */}
        <div className="w-full md:flex md:flex-col md:justify-center">
          <h1 className="mb-2 text-4xl md:text-5xl font-extrabold font-inter text-center md:text-left">
            Build Your Ideal
            <span className="block text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mb-6 text-gray-500 text-center md:text-left font-inter text-[14px] md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-8 justify-center md:justify-start">
            <ButtonLink
              href="#"
              size="lg"
              variant="primary"
              className="min-w-40 flex justify-center"
            >
              Explore Technologies
            </ButtonLink>
            <ButtonLink
              href="#"
              size="lg"
              variant="outline"
              className="min-w-40 flex justify-center"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>

        {/* hero right */}
        <div className="w-full flex justify-center items-center">
          <img src={heroImg} alt="stack image" className="w-full" />
        </div>
      </div>
    </header>
  );
}

export default Hero;

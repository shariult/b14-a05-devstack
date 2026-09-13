import React from "react";
import TechCard from "../Tech/TechCard";
import TechCart from "../Tech/TechCart";

function Techs() {
  return (
    <section className="py-20">
      <div className="container mx-auto py-4">
        <div className="px-4 mb-4">
          <h2 className="font-inter text-3xl font-bold text-center md:text-left">
            Explore the{" "}
            <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-gray-500 text-center md:text-left">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="p-4 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 md:col-span-2 xl:col-span-3">
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
          </div>

          {/* cart */}
          <div className="col-span-1">
            <TechCart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;

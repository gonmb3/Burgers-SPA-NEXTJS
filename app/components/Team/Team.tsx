import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div id="chefs" className="py-[4rem]">
      <h1 className="heading">
        Conoce nuestros expertos <span className="text-red-600">Chefs</span>
      </h1>

      <div className="mt-[4rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {/*  team card*/}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="">
          <TeamCard
            image="/images/t1.jpg"
            name="Jhon Perez"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-center" className="">
          <TeamCard
            image="/images/t2.jpg"
            name="Jane Perez"
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="600" data-aos-anchor-placement="top-center" className="">
          <TeamCard
            image="/images/t3.jpg"
            name="Jaime Perez"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

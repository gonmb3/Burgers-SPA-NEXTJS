"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import burgerImg1 from "@/public/images/b1.png";
import burgerImg2 from "@/public/images/b3.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
        <div  className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-900 md:clip_path px-5 ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* hero image */}
          <Image src={burgerImg2} alt="libro-img" className="hidden md:block"/>
          {/* info */}
          <div className="">
            <h1 className="text-[40px] font-semibold text-yellow-400 ">
              Comida Rapida Burger´s
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
             Clasica<br /> Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit minus est placeat expedita amet nemo nesciunt omnis,
              impedit ratione culpa saepe quos error.
            </p>
            <button className="flex items-center text-white rounded-md space-x-2 bg-red-600 transition-all duration-200 hover:bg-blue-700 px-6 py-3 mt-5 text-[19px] ">
              <span>
                <FaWhatsapp size={22} />
              </span>
              <span className="font-bold text-[15px]">Ordenar ahora</span>
            </button>
          </div>
        </div>
      </div>


      {/*2 image */}

      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-900 md:clip_path px-5 ">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* hero image */}
          <Image src={burgerImg1} alt="libro-img" className="hidden md:block"/>
          {/* info */}
          <div className="">
          <h1 className="text-[40px] font-semibold text-yellow-400 ">
              Comida Rapida Burger´s
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Ultra <br /> Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit minus est placeat expedita amet nemo nesciunt omnis,
              impedit ratione culpa saepe quos error.
            </p>
            <button className="flex items-center text-white rounded-md space-x-2 bg-blue-600 transition-all duration-200 hover:bg-red-700 px-6 py-3 mt-5 text-[19px] ">
              <span>
                <FaWhatsapp size={22} />
              </span>
              <span className="font-bold text-[15px]">Ordenar ahora</span>
            </button>
          </div>
        </div>
      </div>

   
    </Carousel>
  );
};

export default Hero;

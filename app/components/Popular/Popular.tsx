import img1 from "@/public/images/f1.jpg";
import img2 from "@/public/images/f2.jpg";
import img3 from "@/public/images/f3.jpg";
import Image from "next/image";

const Popular = () => {
  return (
    <div className="py-[4rem] ">
      {/*title */}
      <h2 className="heading">
      Novedades
      </h2>

      {/*cards */}
      <div className="w-[90%] md:w-[80%] md:my-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] ">
        
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={img1} alt="img-popular" className="rounded-3xl" />
            <h2 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Combo Burger 1
            </h2>
            <p className="mt-2 text-black text-opacity-70 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              earum molestias excepturi accusamus suscipit quasi.
            </p>
          </div>
        </div>

        <div className="">
          <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={img2} alt="img-popular" className="rounded-3xl" />
            <h2 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
            Combo Burger 2
            </h2>
            <p className="mt-2 text-black text-opacity-70 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              earum molestias
            
            </p>
          </div>
        </div>


        <div  data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center" className="">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={img3} alt="img-popular" className="rounded-3xl" />
            <h2 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
            Combo Burger 3
            </h2>
            <p className="mt-2 text-black text-opacity-70 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              earum molestias excepturi accusamus suscipit quasi, quos,
           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

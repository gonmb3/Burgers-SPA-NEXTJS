import Image from "next/image";
import deliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div id="delivery" className="my-[5rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="">
          <Image src={deliveryImg} alt={"delivery"} />
        </div>

        {/* text content */}
        <div className="">
          <h2 className="text-[30px] md:text-[40px] lg:trext-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Tu <span className="text-red-600">hamburguesa favorita</span> en
            camino
          </h2>
          <p className="text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            architecto accusantium totam saepe mollitia fugit nostrum laborum
            neque, delectus facilis?
          </p>
          <div className="flex items-center space-x-3 mt-[2rem] ">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h3 className="text-[18px] text-black font-medium">Delivery en 30 minutos.</h3>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem] ">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h3 className="text-[18px] text-black font-medium">Envios gratis con compras mayores a $800.</h3>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem] ">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h3 className="text-[18px] text-black font-medium">Delivery a tu puerta.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

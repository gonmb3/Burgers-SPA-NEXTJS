import React from "react";
import { BiPhone } from "react-icons/bi";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className='py-[4rem] bg-center bg-cover relative bg-[url("/images/bg-black.jpg")]' id="reservation">
      {/* black overlay */}
      <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0"></div>
      <div className="w-[80%]  relative z-[20]  mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        {/* text content */}
        <div className="">
          <h2 className="text-[30px] md:text-[40px] lg:text-[45px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            TIENES ALGÚN PLAN PARA LA SEMANA? RESERVA TU MESA!
          </h2>
          <p className="text-[17px mt-[1rem] text-white text-opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi autem magnam eius laudantium id porro expedita provident tenetur.</p>

        <div className="flex items-center mt-[2rem] space-x-4">
          <div className="w-[3rem] h-[3rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
          <BiPhone  className="w-[1.8rem] h-[1.8rem] text-white"  />
          </div>

          <div className="">
            <h3 className="text-[25px] text-white font-semibold">Ordena Rapido de 19:00hs a 00:00</h3>
            <span className="text-yellow-300 text-[30px] ">+598 099 888 777</span>
          </div>
        </div>
        </div>
        {/* reservation form */}
      <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;

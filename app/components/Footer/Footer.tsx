import React from "react";
import { CiBurger } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <div className="py-[3rem]  bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center">
        {/*first col */}
        <div className="">
          {/* logo */}
          <div className="flex items-center space-x-2">
            <CiBurger size={44} className=" text-red-600" />
            <h1 className="text-[20px] text-white sm:text-[30px] font-bold">
              BURGER´S
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            doloremque.
          </p>
          <p className="mt-[1rem] text-white">burgers@gmail.com</p>
          <p className="mt-[0.5rem] text-[19px] text-red-300 font-bold">
            +598 099 888 777
          </p>
        </div>

        {/*second col */}
        <div>
          <h3 className="text-[23px] font-semibold mb-[2rem] text-white">
            Productos
          </h3>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Ultra Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Burger Clasica
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
          Insta Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
          Doble Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
           Cebolla Burger
          </p>
        </div>
        {/*third col */}
        <div>
          <h3 className="text-[23px] font-semibold mb-[2rem] text-white">
            Links 
          </h3>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
           Home
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
          Menú
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
         Delivery
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
       Chef´s
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
          Reservas
          </p>
        </div>

        {/*fourt col */}
        <div>
          <h3 className="text-[23px] font-semibold mb-[2rem] text-white">
           Horarios
          </h3>
            <p className="text-white text-[18px]">Lunes - Viernes : <span className="text-yellow-300">19pm - 00:00am</span></p>
            <p  className="text-white text-[18px]">Sabados : <span className="text-yellow-300">17pm - 01:00am</span></p>
        {/* social icons */}
            <div className="flex mt-[2rem] items-center space-x-6">
                <FaFacebook  className="w-[1.5rem] h-[1.5rem] text-blue-400"/>
                <FaInstagram  className="w-[1.5rem] h-[1.5rem] text-red-400"/>
                <FaTwitter  className="w-[1.5rem] h-[1.5rem] text-blue-300"/>
            </div>
        </div>

      </div>
      {/* copyright text */}
      <p className="text-center text-white py-[1rem] opacity-50">Copyright © {year} <span className="text-yellow-300">GZM</span>. Todos los derechos reservados </p>
    </div>
  );
};

export default Footer;

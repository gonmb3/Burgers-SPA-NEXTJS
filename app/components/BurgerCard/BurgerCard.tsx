import Image from "next/image";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

interface BookProps {
  title: string;
  price: string;
  image: string;
  reviews: string;
}

const BookCard = ({ title, price, image, reviews}: BookProps) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3 hover:scale-105 duration-300 cursor-pointer">
      {/* image div */}
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
        {title}
      </h1>
  
      <div className="flex items-center mt-[0.5rem] space-x-3">
        <div className="flex items-center">
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
        </div>
       
        <div className="text-black opacity-60 ">[{reviews}] </div>
      </div>
      <p className="text-gray-500 font-bold tracking-wider">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div className="flex mt-[1.4rem] items-center justify-between">
        <h1 className="text-[25px] font-bold text-red-800 ">{price}</h1>
      
      </div>
    </div>
  );
};

export default BookCard;

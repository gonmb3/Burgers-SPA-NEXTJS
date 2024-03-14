import React from "react";

const Newsletter = () => {
  return (
    <div className="py-[4rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
         Entérate de las ultimas novedades!
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sed
          delectus accusantium optio autem hic cum voluptatem id omnis,
          recusandae impedit error excepturi architecto odit.
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
            {/*input */}
            <input type="email" placeholder="Escribe tu Email..." name="" id="" className="px-5 py-3 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black" />
        {/* subscribe button*/}
        <button className="px-8 py-4 bg-green-700 font-bold hover:bg-green-900 transition-all duration-200 text-white rounded-md">
        Suscríbete!
        </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

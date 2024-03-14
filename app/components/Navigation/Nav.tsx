import Link from "next/link";
import { CiBurger } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaWhatsapp   } from "react-icons/fa";



interface NavProps{
     openNav : ()=>void;
}

const Nav = ({openNav}: NavProps) => {
  return (


    <nav id="home" className='h-[12vh] bg-white'>
        <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
            {/* logo */}
            <div className="flex items-center space-x-2">
                <CiBurger size={44} className=" text-red-600" /> 
                <h1 className="text-[20px] sm:text-[30px] font-bold">BURGER´S</h1>
            </div>

            {/* nav links */}
            <ul className="hidden lg:flex items-center  space-x-10">
                <li className="text-[20px] font-medium hover:text-red-600">
                    <Link href="#home">Inicio</Link>
                </li>
                <li className="text-[20px] font-medium hover:text-red-600">
                    <Link href="#menu">Menú</Link>
                </li>

                <li className="text-[20px] font-medium hover:text-red-600">
                    <Link href="#delivery">Delivery</Link>
                </li>
                <li className="text-[20px] font-medium hover:text-red-600">
                    <Link href="#chefs">Chef´s</Link>
                </li>
                <li className="text-[20px] font-medium hover:text-red-600">
                    <Link href="#reservation">Reservas</Link>
                </li>
            </ul>

            {/* button */}
            <div className="flex items-center space-x-4 ">
                <button className="hidden md:flex items-center text-white rounded-md space-x-2 bg-blue-950 transition-all duration-200 hover:bg-orange-600 px-2 py-2 sm:px-4 sm:py-3 text-[14px] sm:text-[16px]">
                <span ><FaWhatsapp   size={25} className="text-green-500"/></span>  
                 <span className="font-bold text-[15px]">Ordena ahora</span>  
                </button>
            {/* burger menu icon */}
            <HiBars3BottomRight
            onClick={openNav}
             className="lg:hidden w-[2rem] h-[2rem] text-black cursor-pointer" />
            </div>

        </div>
    </nav>
  )
}

export default Nav
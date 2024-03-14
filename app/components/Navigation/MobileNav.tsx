import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'


interface NavProps{
  showNav: boolean;
  closeNav:() => void;
}

const MobileNav = ({closeNav, showNav}: NavProps) => {

  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  
  return (
    <div className={`flex absolute right-0 ${navStyle} transition-all duration-500 left-0 top-[12vh] bottom-0 h-[100vh] bg-[#000000e0] z-[10002]`}>
     {/**cross close icon */}
      <ImCross
      onClick={closeNav}
       className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white cursor-pointer' />
    {/**nav links */}
    <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex fles-col items-center justify-center w-[70%] h-[100%]`}>
    <ul className="space-y-10 ">
                <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
                    <Link href="/">Shop</Link>
                </li>

                <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
                    <Link href="/">Blog</Link>
                </li>
                <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
                    <Link href="/">Contacto</Link>
                </li>
            </ul>
    </div>
    </div>
  )
}

export default MobileNav
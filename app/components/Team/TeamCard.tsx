import Image from 'next/image'
import React from 'react'

interface TeamCardProps{
    image:string
    name:string 
}

const TeamCard = ({image,name}: TeamCardProps) => {
  return (
    <div>
        <Image src={image} alt={name} height={400} width={400} className='rounded-2xl mx-auto' />
        <h2 className='text-[35px] text-gray-800 mt-[1.5rem] text-center font-bold'>{name} </h2>

      
   <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing eliditate sint libero  illo nesciunt officia.</p>
    </div>
  )
}

export default TeamCard
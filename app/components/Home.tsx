"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Popular from './Popular/Popular'
import BookList from './BurgerList/BurgerList'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import Newsletter from './Newsletter/Newsletter'

import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration:1000 ,
        easing: "ease",
        once:true,
        anchorPlacement:"top-center"
      })
    }
    initAOS();
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Popular />
      <BookList />
      <Delivery />
      <Team/>
      <Reservation />
      <Newsletter />
    </div>
  )
}

export default Home
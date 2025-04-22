import React from 'react'
import Navbar from '../Navbar/navbar' 
import HeroSection from './herosection'
import Service from './Service'
import About from './About'
import StatsSection from './StatisticsSection'
import OurProjects from './ourproject'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Service/>
      <StatsSection/>
      <OurProjects/>
    </>
  )
}

export default Home

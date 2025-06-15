import React from 'react'
import HeroSection from '../Component/HeroSection'
import About from '../Component/About'
import Service from '../Component/Service'
import ServiceList from '../Component/ServiceList'
import Portfolio from '../Component/Portfolio'
import Stat from '../Component/Stat'
import Footer from '../Component/Footer'
import { FloatButton } from "antd";
import Testimonial from '../Component/Testimonial'
const Homepage = () => {
  return (
  <div>
    <HeroSection/>
    <About/>
    <Service/>
    <Portfolio/>
    <Stat/>
    {/* <Testimonial/>  */}
    <Footer/>
    <FloatButton.BackTop/>
  </div>
  )
}

export default Homepage
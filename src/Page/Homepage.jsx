import React from 'react'
import HeroSection from '../Component/HeroSection'
import About from '../Component/About'
import Service from '../Component/Service'
import ServiceList from '../Component/ServiceList'
import Portfolio from '../Component/Portfolio'
import Stat from '../Component/Stat'
import Footer from '../Component/Footer'
import { FloatButton } from "antd";
import TestmonialProps from '../Component/TestmonialProps'
import Testmonials from '../Component/Testmonials'
const Homepage = () => {
  return (
  <div>
    <HeroSection/>
    <About/>
    <Service/>
    <Portfolio/>
    <Stat/>
    <Testmonials/>
    {/* <TestmonialProps/> */}
    <Footer/>
    <FloatButton.BackTop/>
  </div>
  )
}

export default Homepage
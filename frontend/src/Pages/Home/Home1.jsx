import React from 'react'
import HeroSection1 from '../../components/HeroSection1'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home1 = () => {
  return (
    <>
      <HeroSection1 />
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}


export default Home1
import React from 'react'
import HeroSection from '../../components/HeroSection'
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
import LoginReservation from '../../components/LoginReservation'

// const Home = () => {
//   return (
//     <>
//       <HeroSection/>
//       <About/>
//       <Qualities/>
//       <Menu/>
//       <WhoAreWe/>
//       <Team/>
//       <Reservation/>
//       <Footer/>
//     </>
//   )
// }

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Use useEffect to check authentication status when the component mounts
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Verify token validity by sending a request to the server
          const url = 'http://localhost:4000/api/v1/auth'; // Replace with your verification endpoint
          const response = await axios.post(url, { token });
          if (response.data.valid) {
            setIsLoggedIn(true);
          }
        }
      } catch (error) {
        console.error('Error verifying token:', error);
      } 
      finally {
        setLoading(false);
      }

    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <LoginReservation />
      <Footer />
    </>
  );
};

export default Home
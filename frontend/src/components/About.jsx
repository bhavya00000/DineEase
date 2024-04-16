import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Dine Ease, the online hub for our restaurant's reservation services.We're dedicated to providing exceptional dining experiences with ease. 
            Discover the perfect table for any occasion, whether it's a romantic dinner, a gathering with friends or a business meeting. With just a few clicks, you can secure your spot and look forward to savoring our culinary delights. 
            Experience hassle-free dining at our Restaurant. Reserve your table today and let us take care of the rest. We can't wait to welcome you!
            </p>
            <Link to="https://menu-dineease.vercel.app/" target="_blank" rel="noopener noreferrer">
              Explore Menu{""}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
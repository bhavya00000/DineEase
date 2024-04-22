import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { data } from '../restApi.json'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">DineEase</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <a href="http://localhost:5173/signup">

            <button className="menuBtn"> Sign In</button>
          </a>
          
          <a href="http://localhost:5173/login">

            <button className="menuBtn"> Log In</button>
          </a>
          
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar
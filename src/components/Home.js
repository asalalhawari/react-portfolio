import React from 'react';
import myImage from '../assets/image.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src={myImage} alt="Asal" />
      </div>
      <div className="home-content">
        <h3>Hi</h3>
        <h1>It's <span>Asal</span></h1>
        <h3 className="text-animation">I'm a Developer<span></span></h3>
        <p>
          currently training as a programmer at Orange Coding Academy in Aqaba Governorate. I'm passionate about web
          development and continually enhancing my skills in HTML, CSS, JavaScript, PHP.
        </p>
        <div class="social-icons">
                <a href="https://www.linkedin.com/in/asal-alhawari-0384ba307/"> 
                <FaLinkedin/></a>
                <a href="#"><FaFacebook/></a>
                <a href="#"><FaInstagramSquare /></a>
                <a href="#"><FaDiscord/></a>
            </div>
        <a class="hire-button" href="#" className="btn">Hire Me</a>
      </div>
    </section>
  );
};

export default Home;

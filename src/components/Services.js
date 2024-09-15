import React from 'react';
import { FaPalette } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaCodeMerge } from "react-icons/fa6";



const Services = () => {
  return (
    <section className="Services" id="Services">
      <h2 className="heading">Services</h2>
      <div className="Services-container">
        <div className="Services-box">
        <a href="#"><FaPalette/></a>
        <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="Services-box">
        <a href="#"><FaCode/></a>
        <h3>Frontend Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="Services-box">
        <a href="#"><FaCodeMerge /></a>
        <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};
export default Services;

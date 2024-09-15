import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Created By Asal AL_hawari | All Rights Reserved</p>
      </div>
      <div class="footer-iconTop">
                <a href="https://www.linkedin.com/in/asal-alhawari-0384ba307/"> 
                <FaLinkedin/></a>
                <a href="#"><FaFacebook/></a>
                <a href="#"><FaInstagramSquare /></a>
                <a href="#"><FaDiscord/></a>
            </div>
    </footer>
  );
};

export default Footer;

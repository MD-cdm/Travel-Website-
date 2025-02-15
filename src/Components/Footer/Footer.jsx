
import React, { useEffect, useState } from 'react';
import './footer.css';
import video2 from '../../Assets/video (2).mp4';
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLocationPin } from "react-icons/tb";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv flex">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Travel is more than just moving from one place to another; it's about experiencing and understanding the world, learning about different ways of life, and often gaining a new perspective on your own life and surroundings.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <a href="https://x.com/MdNeyaz27614" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" />
              </a>
              <a href="https://youtu.be/4e8OD2gzPRg?si=0CJN2jWIff1xoZ1g" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon" />
              </a>
              <a href="https://www.instagram.com/mdneyaz49/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className='groupTitle'>OUR AGENCY</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Booking
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Payment
                </li>
              </ul>
            </div>


            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className='groupTitle'>LAST MINUTES</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> India
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Dubai
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'>CONTACT US</span>
              <ul>
                <li className="footerList flex">
                  <MdCall  className='icon' />+91 9631035088
                </li>
                <li className="footerList flex">
                  <MdOutlineEmail className='icon' />md12@gmail.com
                </li>
                <li className="footerList flex">
                  <TbLocationPin  className='icon' />Rajkot,India 360003
                </li>
                <li className="footerList flex">
                  <FaWhatsapp  className='icon' />::9631035088 

                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> TripAdvisor
                </li>
              </ul>
            </div>

            {/* <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className='groupTitle'>LAST MINUTES</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> India
                </li>
                <li className="footerList flex">
                  <FiChevronRight className='icon' /> Dubai
                </li>
              </ul>
            </div> */}
          </div>

          <div className="footerDiv flex">
            <small>BEST WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED || Made with ❤️ Md Neyaz</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

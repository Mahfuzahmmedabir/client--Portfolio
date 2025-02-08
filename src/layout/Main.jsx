import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbars from '../shared/Navbar';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <div data-aos="fade-up">
      <Navbars></Navbars>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

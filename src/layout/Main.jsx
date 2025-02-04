import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../shared/Footer';
import Navbars from '../shared/Navbar';

const Main = () => {
  return (
    <div>
      <Navbars></Navbars>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

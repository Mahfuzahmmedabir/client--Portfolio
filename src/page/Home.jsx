import React from 'react';
import About from './About';
import Banner from './Banner';
import Card from './Card';
import Portfolio from './Portfolio';
import { Outlet } from 'react-router-dom';
import Skill from './Skill';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      {/* <div>
        <Portfolio></Portfolio>
        <Outlet></Outlet>
      </div> */}
      <Skill></Skill>
      {/* <Card></Card> */}
    </div>
  );
};

export default Home;

import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Project from './Project';
import ReviewsSection from './ReviewsSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Project></Project>
      <ReviewsSection></ReviewsSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;

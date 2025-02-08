import React from 'react';
// import '../index.css';
import banner from '../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
import useAOS from '../hooks/useAOS';

const Banner = () => {
  useAOS()
  return (
    <div data-aos="zoom-in"
      className="flex justify-between  mt-10 rounded-md p-4"
    >
      <div className="mx-auto items-center  py-48 ">
        <h2 className="text-5xl">Masum Ahmed</h2>
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
          molestias saepe quos placeat laborum sit dolores dolore pariatur
          exercitationem.
        </p>
        <p className="py-2">Jr Software Engring</p>
      </div>
      {/*  */}
      <div className="w-6/12 ">
        <img src={banner} alt="" />
      </div>
    </div>

  );
};

export default Banner;

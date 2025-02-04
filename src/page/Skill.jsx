import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Skill = () => {
  return (
    <div>
      <div className="flex justify-evenly mt-10">
        <div className="w-6/12">
          <h2 className="text-3xl poppins-black-italic font-semibold w-[550px] ">
            I have high skills in developing and programming.
          </h2>
          <p className="mt-3 w-96">
            I am working on a professional, visually sophisticated and
            technologically proficient, responsive and multi-functional personal
            portfolio template Shane.
          </p>
        </div>
        <div>
          <div className="card w-96">
            <h2 className="text-xl ">Web development</h2>
            <ProgressBar className="h-4" value={95}></ProgressBar>
          </div>
          <div className="card mt-2 w-96">
            <h2 className="text-xl ">Design</h2>
            <ProgressBar className="h-4" value={60}></ProgressBar>
          </div>
          <div className="card mt-2 w-96">
            <h2 className="text-xl ">SEO</h2>
            <ProgressBar className="h-4" value={50}></ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

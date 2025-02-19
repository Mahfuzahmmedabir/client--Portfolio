import React from 'react';
// import '../index.css';
// import banner from '../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
import useAOS from '../hooks/useAOS';
import { QRCodeCanvas } from 'qrcode.react';
const Banner = () => {
  const url = 'https://your-portfolio.com';
  useAOS();

  return (
    <div
      data-aos="zoom-in"
      className="lg:flex flex-col-reverse gap-8 justify-between lg:flex-row-reverse  rounded-md p-4"
    >
      {/* Qrcode */}
      <div className="lg:w-4/12 flex items-center lg:-mt-60  ">
        <div className="mx-auto text-center">
          <QRCodeCanvas
            value={url}
            size={200}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'H'} // Error correction level
          />
        </div>
      </div>

      <div className="mx-auto lg:w-4/12 mt-10  ">
        <h2 className="text-5xl">Masum Ahmed</h2>
        <p className="py-2">Jr software engineer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          distinctio, exercitationem hic eius incidunt magnam deserunt atque
          architecto vel quos mollitia quasi expedita autem nesciunt laborum
          doloremque, reprehenderit tempore eum?
        </p>

        <div className="lg:flex gap-10 mt-4">
          <a className="btn mx-4" href={'#conteat'}>
            About
          </a>
          <a className="btn mx-4" href={'#conteat'}>
            Conteat
          </a>
        </div>
      </div>
      {/* image  */}

      <div className="lg:w-4/12 mt-7  ">
        <img
          className="h-[500px] w-[577px] rounded-2xl"
          src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/311283682_3241537906111256_3186082031804948194_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=669761&_nc_ohc=cxBWLYrOfWcQ7kNvgFNcQ7g&_nc_oc=AdjSOasAaTh-iFwLHmipdfGxuwx8eWcGe2M0OLqL7Jg-z27ZezJoki9FeEivZdObTJM&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ArDoqM1vZqjHVRAtzXRhTpt&oh=00_AYAOCIsf1mjNurdDwV-soITwuAZnXrl8l4_iHSMyZf1ehQ&oe=67BB83AC"
          alt=""
        />
        {/* <img
          className="h-96 rounded-2xl"
          src={banner}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Banner;

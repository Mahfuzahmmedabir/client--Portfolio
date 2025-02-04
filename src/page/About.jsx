import SimpleParallax from 'simple-parallax-js';
import aboutImg from '../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg';

const About = () => {
  return (
    <div id="#about">
      <div className="flex gap-12 mt-10">
        {/* About img */}
        <div className="w-6/12">
          <SimpleParallax orientation="right">
            <img src={aboutImg} alt="" />
          </SimpleParallax>
        </div>
        {/* About text */}
        <div className="w-6/12 mt-5 rounded-none">
          <div>
            <span className="py-3 px-4 font-semibold glass ">About me</span>
            <h2 className="text-3xl mt-7 font-semibold ">
              Creative Independent Web Developer based in Australia
            </h2>
            <p className="mt-7">
              I'm web designer, and I'm very passionate and dedicated to my
              work. With 20 years experience as a professional web developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>
            <button className="bg-black text-white border px-4 py-3 mt-7">
              {' '}
              Dewonlode CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

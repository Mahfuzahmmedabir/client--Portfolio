import { NavLink } from 'react-router-dom';
const Navbars = () => {
  return (
    <div data-aos="fade-up" className="mt-3 ">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div>
          <h2 className="text-xl font-bold poppins-black-italic ">
            Masum Ahmed
          </h2>
        </div>

        <div className="flex justify-center gap-10 items-center">
          <ul className="flex gap-7 ">
            <li>
              <a href={'/'}>Home</a>
            </li>
            <li>
              <a href={'#about'}>About</a>
            </li>
            <li>
              <a href={'#project'}>Project</a>
            </li>
            <li>
              <a href={'#conteat'}>Conteat</a>
            </li>
          </ul>
          <button className="border py-3 px-6 hover:bg-black hover:text-white font-semibold transition duration-300 ease-in-out ">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbars;

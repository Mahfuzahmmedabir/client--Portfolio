import { NavLink } from 'react-router-dom';
// import '../index.css';
const Navbars = () => {
  return (
    <div className="mt-3">
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
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/img'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/h'}>Projec</NavLink>
            </li>
            <li>
              <NavLink to={'/aa'}>Conteat</NavLink>
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

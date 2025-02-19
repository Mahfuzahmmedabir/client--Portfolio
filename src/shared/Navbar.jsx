import { FiDownload } from 'react-icons/fi';

const Navbars = () => {
  const links = (
    <div className="  justify-center gap-10 items-center">
      <ul className="lg:flex gap-7 font-semibold text-[18px] ">
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
    </div>
  );
  return (
    <div className="navbar z-50 bg-base-300 sticky top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] flex-none mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Masum Ahmed</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-xl">
          <FiDownload></FiDownload>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbars;

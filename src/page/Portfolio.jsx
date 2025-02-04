import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ima1 from '../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
const Portfolio = () => {
  const [category, setCategory] = useState([]);
  console.log(category);
  useEffect(() => {
    fetch('/category.json')
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, []);
  return (
    <div className="bg-blue-gray-50 p-20 mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">Creative Portfolio</h2>
        <div>
          <ul className="flex gap-6">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? 'active  p-3 text-xl rounded-full'
                  : isPending
                  ? 'pendin'
                  : 'text-2xl   rounded-full  font-bold'
              }
            >
              All
            </NavLink>
            {category.map(item => (
              <NavLink
                key={item.id}
                className={({ isActive, isPending }) =>
                  isActive
                    ? 'active  p-3 font-bold rounded-full'
                    : isPending
                    ? 'pending'
                    : 'p-3 rounded-full text-red-700 bg-slate-100'
                }
                to={`/tab/${item.category}`}
              >
                {item.category}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div>
          <img src={ima1} alt="" />
        </div>

        <div>
          <img src={ima1} alt="" />
        </div>

        <div>
          <img src={ima1} alt="" />
        </div>

        <div>
          <img src={ima1} alt="" />
        </div>

        <div>
          <img src={ima1} alt="" />
        </div>

        <div>
          <img src={ima1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

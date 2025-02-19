import React from 'react';
// import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import useAOS from '../hooks/useAOS';

const Contact = () => {
  useAOS();
  return (
    <div data-aos="fade-up" id="conteat" className=" mt-10  lg:m-10  ">
      <h2 className="text-3xl text-center font-semibold">Let's get Contact</h2>
      <div className=" lg:flex justify-between gap-5 p-4 bg-base-200 rounded-lg lg:p-10 mt-10">
        <div className="mx-auto  lg:w-6/12 lg:py-28 py-7 rounded-md ">
          <h2 className="text-3xl  font-bold">Contact me</h2>
          <p className="lg:mt-10 text-[17px] lg:w-96  ">
            I’d love to hear from you! Whether you have a project idea, job
            opportunity, or just want to connect, feel free to reach out. Let’s
            collaborate and build something amazing!
          </p>
          <div className="bg-base-300 lg:w-96 mt-6 p-7 rounded-xl ">
            <span className="text-xl font-bold flex items-center gap-2 ">
              <FaLocationDot className="text-[#1877F2]"></FaLocationDot>
              Bangladesh, Dhaka
            </span>
            <span className="text-xl font-bold flex items-center  mt-2 gap-2">
              <FaPhone className="text-[#1877F2]"></FaPhone>
              01869867024
            </span>
            <span className="text-xl font-bold flex items-center  mt-2 gap-2">
              <MdEmail className="text-[#1877F2]"></MdEmail>
              masumahme@gmail.com
            </span>
          </div>
        </div>
        <div className="card bg-base-100 lg:mt-10 lg:w-6/12   shadow-2xl">
          <form className="card-body lg:w-full lg:p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">You Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
              <label
                className="label-text mt-2 text-xl font-bold"
                for="w3review"
              >
                Write your Masege
              </label>
              <textarea
                className="border mt-1 rounded-md p-2"
                id="w3review"
                name="w3review"
                rows="6"
                cols="50"
                placeholder="Write you masege here.."
              ></textarea>
            </div>
            <div className=" mt-6">
              <button className="btn ">Send Masege</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

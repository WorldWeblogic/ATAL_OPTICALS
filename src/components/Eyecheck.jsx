import React from "react";
import eyecheck from '../assets/category/eyecheck.jpeg'

const Eyecheck = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 ml-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Eye Check Facility
        </h2>
        <hr className="w-52 mb-8"></hr>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At the Dry Eye Institute, we offer a wide range of advanced
          treatments to address the root causes of dry eye and restore lasting
          comfort. Our personalized approach begins with a thorough evaluation
          to determine the best course of action for each patient. Whether
          you're dealing with mild irritation or more complex symptoms, our
          expert team is equipped with the latest technologies and treatment
          options to help you find relief. Explore our specialized services
          below and discover how we can create a customized treatment plan
          tailored to your unique needs.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-black hover:cursor-pointer transition">
          Learn more
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center">
      <div className="">
      <img
          src={eyecheck}
          alt="Dry Eye Exam"
          className="rounded-lg shadow-lg h-[550px] object-cover border-1 border-red-600"
        />
      </div>
      </div>
    </section>
  );
};

export default Eyecheck;

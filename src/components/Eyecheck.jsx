import React from "react";
import eyecheck from "../assets/category/eyecheck.jpeg";
import eyecheck2 from "../assets/category/eyecheck2.png";
import CountUp from 'react-countup';
const Eyecheck = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-14 py-12 bg-white gap-x-30">
      {/* Left Text Section */}
      <div className="mb-8 md:mb-0 ml-10 w-1/2">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Eye Check Facility
        </h2>
        <hr className="w-52 mb-8"></hr>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At the Dry Eye Institute, we offer a wide range of advanced treatments
          to address the root causes of dry eye and restore lasting comfort. Our
          personalized approach begins with a thorough evaluation to determine
          the best course of action for each patient. Whether you're dealing
          with mild irritation or more complex symptoms, our expert team is
          equipped with the latest technologies and treatment options to help
          you find relief. Explore our specialized services below and discover
          how we can create a customized treatment plan tailored to your unique
          needs.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-black hover:cursor-pointer transition">
          Learn more
        </button>
      </div>

      {/* Right Image Section */}
       <div className="grid grid-cols-2 gap-4 my-10 w-1/2 mr-12">
      
      {/* Top Left: Image 1 */}
      <div className="rounded-xl overflow-hidden shadow-md h-[270px]">
        <img src={eyecheck} alt="Student Reading" className="w-full h-full object-fill" loading="lazy" decoding="async" />
      </div>

      {/* Top Right: Stat 1 */}
      <div className="bg-gradient-to-br from-red-600 via-black to-red-600  text-white flex flex-col justify-center items-center rounded-xl shadow-xl p-6 mt-10 shadow-white">
        <h2 className="text-6xl font-bold hover:scale-120 hover:cursor-pointer"><CountUp end={1} duration={3} />K+</h2>
        <p className="mt-20 text-xl">Qualified Instructor</p>
      </div>

      {/* Bottom Left: Stat 2 */}
      <div className="bg-gradient-to-br from-red-600 via-black to-red-600  text-white flex flex-col justify-center items-center rounded-xl shadow-md p-6 mt-10">
        <h2 className="text-6xl font-bold hover:scale-120 hover:cursor-pointer"><CountUp end={9} duration={3} />K+</h2>
        <p className="mt-20 text-xl">Active Student</p>
      </div>

      {/* Bottom Right: Image 2 */}
      <div className="rounded-xl overflow-hidden shadow-md h-[270px]">
        <img src={eyecheck2} alt="Group Learning" className="w-full h-full object-cover" loading="lazy" decoding="async"/>
      </div>
    </div>
    </section>
  );
};

export default Eyecheck
  

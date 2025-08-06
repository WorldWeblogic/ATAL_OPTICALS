import React from "react";
import image from "../../assets/about/about-us.jpg";
import bgimage from "../../assets/about/bgimage.png";
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        {/* Left - Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center pt-10">
          <img
            src={image}
            alt="Eye Checkup"
            className="max-w-[400px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-4 left-94 bg-red-600 text-white text-center rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:bounce hover:cursor-pointer">
            <span className="text-3xl font-bold">20</span>
            <span className="text-3xl">Years</span>
          </div>
        </div>

        {/* Right - Text */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 text-center lg:text-left">
          <h2 className="text-red-600 text-2xl font-semibold mb-2">
            Welcome To ATAL Optical
          </h2>
          <hr className="w-42 mb-6 border-red-500"></hr>
          <h1 className="text-3xl md:text-4xl font-light leading-snug mb-4">
            ATAL Optical has been providing{" "}
            <strong className="font-semibold">
              luxury eye wear for clients
            </strong>{" "}
            in Toronto and the GTA since 2005.
          </h1>
          <p className="text-gray-600 text-base">
            Gopal Puri, owner of CMAX Optical offers a wide selection of
            fashionable and practical eyewear to suit any lifestyle. We offer
            the most popular eyeglasses on the market today.
          </p>
          <p className="text-gray-600 text-base mt-6 mb-6">
            Our expert optician and stylists will help you choose the right eye
            wear to suit your face shape, personality and lifestyle. We want you
            to see the world, but look and feel your best with quality eye wear
            products.
          </p>
          <p className="text-gray-600 text-base">
            Come visit one of our locations today, and our friendly and
            knowledgeable team will help you find eye wear perfect for you.
          </p>
          <button className="flex items-center bg-red-600 text-white p-3 rounded-lg mt-6 hover:bg-black hover:cursor-pointer ">
            About Us{" "}
            <span className="ml-4 bg-white p-2 rounded-lg">
              <FaArrowRight className="hover:rotate-[-45deg] transition duration-250 ease-in-out text-black" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

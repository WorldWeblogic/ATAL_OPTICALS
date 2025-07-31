import React from "react";
import lens1 from '../assets/lenstype/lens1.avif';
import lens2 from '../assets/lenstype/lens2.avif';
import lens3 from '../assets/lenstype/lens3.avif';
import lens4 from '../assets/lenstype/lens4.avif';
import lens5 from '../assets/lenstype/lens5.avif';
// Sample data
const lensTypes = [
  {
    title: "Blue-Light Blocking Lens",
    description: "Reduces eye strain and protects against harmful blue light from...",
    image: "/assets/blue-light.png", // Replace with actual paths
    bgColor: "bg-gradient-to-b from-[#041933] to-[#0b2342]",
    textColor: "text-white",
    btnBg: "bg-white",
    btnText: "text-black"
  },
  {
    title: "Progressive Lens",
    description: "Seamlessly combines multiple prescriptions into one lens...",
    image: "/assets/progressive.png",
    bgImage: "bg-[url('/assets/bg-progressive.jpg')]",
    textColor: "text-white",
    btnBg: "bg-white",
    btnText: "text-black"
  },
  {
    title: "Photochromic Lens",
    description: "Automatically adjusts to light, darkening outdoors and lightening...",
    image: "/assets/photochromic.png",
    bgColor: "bg-[#cceeff]",
    textColor: "text-white",
    btnBg: "bg-white",
    btnText: "text-black"
  },
  {
    title: "Driving Lens",
    description: "Reduces glare and enhances contrast for clearer, safer vision on...",
    image: "/assets/driving.png",
    bgImage: "bg-[url('/assets/bg-driving.jpg')]",
    textColor: "text-white",
    btnBg: "bg-white",
    btnText: "text-black"
  },
  {
    title: "Polarized Lens",
    description: "Blocks glare from reflective surfaces, enhancing clarity and...",
    image: "/assets/polarized.png",
    bgImage: "bg-[url('/assets/bg-polarized.jpg')]",
    textColor: "text-white",
    btnBg: "bg-white",
    btnText: "text-black"
  }
];

const LensTypeSection = () => {
  return (
    <section className="px-8 py-12 bg-white">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Shop by <span className="text-black">Lens Type</span>
        </h2>
        <p className="text-gray-500 mt-1">
          Our diversified selection of high quality lens fulfill your daily vision need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {lensTypes.map((lens, idx) => (
          <div
            key={idx}
            className={`rounded-md overflow-hidden h-[380px] flex flex-col justify-between p-4 ${
              lens.bgColor || lens.bgImage
            } bg-cover bg-center`}
          >
            <img
              src={lens.image}
              alt={lens.title}
              className="h-[100px] object-contain mx-auto"
            />
            <div className={`${lens.textColor} mt-auto`}>
              <h3 className="font-bold text-lg mb-2">{lens.title}</h3>
              <p className="text-sm mb-4">{lens.description}</p>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${lens.btnBg} ${lens.btnText}`}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LensTypeSection;

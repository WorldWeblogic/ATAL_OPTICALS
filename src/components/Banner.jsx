import React from "react";
import Slider from "react-slick";
import slider1 from '../assets/banner/slider1.webp';
import slider2 from '../assets/banner/slider2.webp';
import slider3 from '../assets/banner/slider3.webp';
import slider4 from '../assets/banner/image.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  // {
  //   img:slider4
  // },
  {
    img: slider2,
    text: "Innovative & Passionate Digital Agency",
    desc: "Let us help you increase the reach and visibility of your business by driving highly targeted traffic.",
  },
  {
    img: slider1,
    text: "Web Design & Development Services",
    desc: "We design and develop beautiful and memorable websites with user-centric, mobile -first design approach for great user experience and enhaned conversions, ensuring high performance, security and scalability.",
  },
  {
    img: slider3,
    text: "Web Design & Development Services",
    desc: "We design and develop beautiful and memorable websites with user-centric, mobile -first design approach for great user experience and enhaned conversions, ensuring high performance, security and scalability.",
  },
];

function Banner() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-full relative overflow-hidden">
    <Slider {...settings}>
    {data.map((item, index) => (
      <div key={index} className="relative">
        <img
          src={item.img}
          className="w-full h-auto object-cover items-center justify-center"
          alt={`slider-${index}`}
        />
      </div>
    ))}
  </Slider>
</div>
  );
}

export default Banner;

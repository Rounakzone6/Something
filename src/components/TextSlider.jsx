import React from "react";
import Slider from "react-slick";

const slides = [
  {
    heading: "Startup 1",
    title: "Forget About Code",
    subtitle:
      "Startup Framework gives you complete freedom over your creative process — no coding required.",
  },
  {
    heading: "Startup 2",
    title: "Design with Freedom",
    subtitle:
      "Easily design clean, responsive interfaces with drag and drop tools and UI kits.",
  },
  {
    heading: "Startup 3",
    title: "Launch Fast",
    subtitle:
      "Build and launch your startup website in hours, not days or weeks.",
  },
];

const TextSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full px-4 py-10 bg-gradient-to-b text-white flex items-center justify-center text-center min-h-[60vh] sm:min-h-[70vh]">
      <Slider {...settings} className="w-full max-w-3xl mx-auto">
        {slides.map((slide, i) => (
          <div key={i} className="px-4">
            <h4 className="text-lg text-purple-200 mb-2">{slide.heading}</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto">{slide.subtitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextSlider;

import React from "react";
import assets from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import TextSlider from "./TextSlider";

const LandingPage = () => {
  return (
    <div
      className="flex text-white flex-col pr-10 min-h-[80vh] items-center justify-between py-6 gap-10 bg-cover bg-no-repeat bg-[#1c1251] "
      style={{ backgroundImage: `url(${assets.features})` }}
    >
      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>
            <FontAwesomeIcon icon={faGlobe} />
          </li>
          <li>Me</li>
        </ul>
      </div>
      <div>
        <TextSlider />
      </div>
      <button className="px-8 py-3 rounded-full bg-[#2f1893] text-white font-medium">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;

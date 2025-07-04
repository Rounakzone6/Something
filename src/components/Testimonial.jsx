import React from "react";
import { clients } from "../assets";

const Testimonial = () => {
  return (
    <div className="py-6 bg-[#2f1893]">
      <div className="mx-auto max-w-[80%] text-white">
        <h2 className="text-2xl font-bold mb-6">Our Happy Clients</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {clients.map((item, index) => (
            <div key={index} className="flex md:flex-row flex-col border border-gray-500 gap-4 p-2 md:w-[45%] md:h-[30vh] rounded-2xl">
              <div
                className="w-32 h-32 min-w-32 min-h-32 mx-auto bg-cover bg-center rounded-full border border-white"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="flex flex-col justify-around">
                <p>{item.text}</p>
                <p className="text-gray-400 font-bold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

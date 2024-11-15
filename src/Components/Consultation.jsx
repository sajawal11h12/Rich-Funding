import React from "react";
import { LampContainer } from "./Designfile/Lamp";
import consultant from "../assets/consultant.png"; // Replace with an actual image related to consultation

const Consulting = () => {
  return (
    <div id="consultation" className="relative min-h-screen overflow-hidden font-poppins">
      {/* LampContainer positioned closer to the Header */}
      <LampContainer className="absolute -top-20 left-0 z-0 opacity-75" />

      {/* Consultation Page Content */}
      <div className="relative z-10 flex flex-col justify-center p-6 md:p-10 min-h-screen">
        <div className="flex flex-col items-center mt-10 md:mt-20 text-white">
          {/* Page Header */}
          <h1 className="font-bold text-3xl md:text-5xl font-poppins text-center">
            Consultation Services
          </h1>

          {/* Introduction */}
          <p className="font-poppins text-center mt-4 max-w-3xl text-sm md:text-base">
            At <span className="font-bold">FundingRich.com</span>, we specialize in personalized financial consulting services to help you achieve your funding and financial goals. Our experts work closely with you to provide tailored advice and solutions that support your growth and success.
          </p>

          {/* Row Layout for Image and Contact Info */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 mt-10">
            {/* Image Section */}
            <div className="flex justify-center mb-6 lg:mb-0">
              <img
                src={consultant}
                alt="Consultation"
                className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>

            {/* Contact Information */}
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-2xl md:text-3xl font-poppins">
                Contact Joseph Choi
              </h2>
              <p className="mt-2 text-sm md:text-base">
                42480 Moraga Rd, Suite# 303<br />
                Temecula, CA 92591
              </p>
              <p className="mt-4 text-sm md:text-base">
                Phone: <a href="tel:1-760-716-4170" className="underline hover:text-blue-300">1-760-716-4170</a><br />
                Fax: 1-951-699-3202
              </p>
              <p className="mt-4 text-sm md:text-base">
                Email Me: <a href="mailto:richfunding@yahoo.com" className="underline hover:text-blue-300">richfunding@yahoo.com</a><br />
                <button href="#" className="gradient-button">Visit my blog here</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;

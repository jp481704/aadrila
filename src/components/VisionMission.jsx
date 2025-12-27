import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImage from "../assets/bg_image/about-bg.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 150,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F8FAFC",
        backgroundImage: `url(${aboutImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <div
        className="flex justify-center mb-16 lg:mb-32 pt-28 lg:pt-40 px-4"
        data-aos="fade-down"
      >
        <div className="bg-white rounded-xl shadow-lg px-6 py-8 lg:px-8 lg:py-16 text-center w-full sm:w-[80%] lg:w-[60%] max-w-lg">
          <h1 className="text-2xl lg:text-4xl font-semibold text-gray-900">
            About Us
          </h1>
          <p className="mt-3 text-sm">
            <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
              Meet the Minds Shaping Document Automation.
            </span>
          </p>
        </div>
      </div>

      {/* VISION */}
      <div
        className="w-full flex justify-center lg:justify-start mb-14 lg:mb-28 px-4"
        data-aos="fade-right"
      >
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-md 
        rounded-2xl lg:rounded-r-full lg:rounded-l-none
        px-6 lg:px-10 py-6 lg:py-4 w-full lg:w-[1000px] justify-end">

          <p className="text-gray-500 text-[15px] text-center lg:text-right max-w-md lg:mr-6 mb-4 lg:mb-0">
            To redefine document management with cutting-edge technology that
            ensures accuracy, efficiency, and trust.
          </p>

          <div className="flex items-center gap-4 lg:mr-4 mb-4 lg:mb-0">
            <span className="hidden lg:block w-[2px] h-10 bg-orange-500"></span>
            <div className="text-center lg:text-right">
              <p className="font-semibold">Our</p>
              <p className="font-semibold">Vision</p>
            </div>
          </div>

          <div className="bg-[#3E6EB4] w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-xl">
            <img src={vision} alt="vision" className="w-7 lg:w-auto" />
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div
        className="w-full flex justify-center lg:justify-end px-4 pb-20"
        data-aos="fade-left"
      >
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-md 
        rounded-2xl lg:rounded-l-full lg:rounded-r-none
        px-6 lg:px-10 py-6 lg:py-4 w-full lg:w-[1000px]">

          <div className="bg-[#3E6EB4] w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-xl mb-4 lg:mb-0">
            <img src={mission} alt="mission" className="w-7 lg:w-auto" />
          </div>

          <div className="flex items-center gap-4 lg:ml-4 mb-4 lg:mb-0">
            <div className="text-center lg:text-left">
              <p className="font-semibold">Our</p>
              <p className="font-semibold">Mission</p>
            </div>
            <span className="hidden lg:block w-[2px] h-10 bg-orange-500"></span>
          </div>

          <p className="text-gray-500 text-[15px] text-center lg:text-left max-w-md lg:ml-6">
            To redefine document management with cutting-edge technology that
            ensures accuracy, efficiency, and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

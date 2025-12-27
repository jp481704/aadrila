import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import right from "../assets/bg_image/right.png";

import InsuranceIcon from "../assets/Insurance_Icon.png";
import LendingIcon from "../assets/Lending_Icon.png";
import HealthcareIcon from "../assets/Healthcare_Icon.png";

import small_dot from "../assets/bg_image/small_dot.png";
import big_dot from "../assets/bg_image/big_dot.png";

const Application = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28 mt-16">
      <img
        src={right}
        alt="Background Arc"
        data-aos="fade-right"
        className="absolute -left-56 top-0 w-[780px] opacity-70 hidden lg:block"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <p
          data-aos="fade-right"
          className="text-base md:text-lg font-medium text-orange-500 mb-3"
        >
          AI-driven innovation for growth.
        </p>

        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-3xl md:text-4xl xl:text-[42px] font-bold text-gray-900 mb-16 lg:mb-24"
        >
          Industries We Empower
        </h2>

        <div className="relative max-w-6xl ml-auto h-[420px] hidden lg:block">
          <img
            src={small_dot}
            alt="Small dots"
            data-aos="fade-down-left"
            data-aos-delay="200"
            className="absolute right-[25%] top-0"
          />

          <Card
            data-aos="fade-down-left"
            data-aos-delay="300"
            icon={InsuranceIcon}
            title="Insurance"
            text="Automate claims processing with accurate document validation."
            className="absolute left-[-5%] bottom-[6%]"
          />

          <Card
            data-aos="fade-down-left"
            data-aos-delay="450"
            icon={LendingIcon}
            title="Lending"
            text="Ensure faster loan approvals with fraud detection and instant verification."
            className="absolute left-[32%] top-[20%]"
          />

          <Card
            data-aos="fade-down-left"
            data-aos-delay="600"
            icon={HealthcareIcon}
            title="Healthcare"
            text="Streamline patient record management and ensure compliance with HIPAA standards."
            className="absolute right-[4%]"
          />
          <img
            src={big_dot}
            alt="Big dots"
            data-aos="fade-down-left"
            data-aos-delay="750"
            className="absolute right-[-19%] bottom-0"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
          <Card
            data-aos="fade-up"
            icon={InsuranceIcon}
            title="Insurance"
            text="Automate claims processing with accurate document validation."
          />

          <Card
            data-aos="fade-up"
            data-aos-delay="150"
            icon={LendingIcon}
            title="Lending"
            text="Ensure faster loan approvals with fraud detection and instant verification."
          />

          <Card
            data-aos="fade-up"
            data-aos-delay="300"
            icon={HealthcareIcon}
            title="Healthcare"
            text="Streamline patient record management and ensure compliance with HIPAA standards."
            className="sm:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, text, className = "", ...props }) => (
  <div
    {...props}
    className={`bg-white rounded-2xl p-8 shadow-xl text-center w-full lg:w-[28%] ${className}`}
  >
    <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-orange-50">
      <img src={icon} alt={title} className="w-7 h-7" />
    </div>

    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
  </div>
);

export default Application;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import docsim from "../assets/docsim.png";
import docpilot from "../assets/docpilot.png";
import doxtract from "../assets/doxtract.png";

import left from "../assets/bg_image/left.png";
import right from "../assets/bg_image/right.png";

import small_dot from "../assets/bg_image/small_dot.png";
import big_dot from "../assets/bg_image/big_dot.png";

const products = [
  {
    tag: "DocSim",
    title: "AI-Powered Document Similarity Engine",
    features: [
      "Detects near-duplicates and tampered documents.",
      "Identifies fraudulent patterns across large repositories.",
      "Multi-language support for global adaptability.",
    ],
    benefits: [
      "Save 30% time on manual checks.",
      "Reduce document fraud by up to 60%.",
    ],
    image: docsim,
  },
  {
    tag: "DocPilot",
    title: "Streamline Document Workflows with Automation",
    features: [
      "Automates document collection, routing, and task assignments.",
      "Real-time tracking with advanced dashboards.",
      "Seamless integration with enterprise systems via APIs.",
    ],
    benefits: [
      "Reduce turnaround times by 50%.",
      "Improve operational efficiency with minimal manual effort.",
    ],
    image: docpilot,
  },
  {
    tag: "Doxtract",
    title: "Extract, Validate, and Process Documents with Ease",
    features: [
      "OCR and NLP-based data extraction.",
      "Handles unstructured documents across industries.",
      "Validates fields using external data sources.",
    ],
    benefits: [
      "Process 10,000+ documents in minutes.",
      "Achieve 99% data accuracy with AI-driven validation.",
    ],
    image: doxtract,
  },
];

const Features = () => {
  // ✅ AOS INIT (NO DESIGN CHANGE)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* HEADER */}
      <div className="relative text-center mb-20 lg:mb-28" data-aos="fade-down">
        <img
          src={big_dot}
          alt="dots"
          className="absolute left-6 -top-6 opacity-60 hidden lg:block"
        />

        <p className="text-orange-600 font-medium  mb-2 text-[24px]">
          features and benefits.
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Our Products
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-28 lg:space-y-44">
        {products.map((product, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center gap-14 lg:gap-20 ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* BACKGROUND ARC — SAME POSITION */}
              <img
                src={isReverse ? right : left}
                alt="background circle"
                className={`absolute ${
                  isReverse ? "left-[-18%]" : "right-[-25%]"
                } -top-15 -translate-y-1/2 w-[45%] xl:w-[50%]  hidden lg:block`}
                data-aos={isReverse ? "fade-right" : "fade-left"}
                data-aos-delay="100"
              />

              {/* SMALL DOT — SAME LOGIC */}
              {index === 1 && (
                <img
                  src={small_dot}
                  alt="dots"
                  className="absolute right-8 -top-10 opacity-60 hidden lg:block"
                  data-aos="fade-left"
                  data-aos-delay="80"
                />
              )}

              {/* BIG DOT — SAME LOGIC */}
              {index === 2 && (
                <img
                  src={big_dot}
                  alt="dots"
                  className="absolute left-8 -top-9 opacity-50 hidden lg:block"
                  data-aos="fade-right"
                  data-aos-delay="80"
                />
              )}

              {/* TEXT */}
              <div
                className="flex-1 space-y-6 text-center lg:text-left relative z-10"
                data-aos={isReverse ? "fade-left" : "fade-right"}
                data-aos-delay="250"
              >
                <span
                  className="inline-block px-6 py-2 rounded-full text-white  font-medium
             bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] text-[16px]"
                >
                  {product.tag}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold leading-snug text-slate-900">
                  {product.title}
                </h3>

                <div>
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {product.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-full font-medium transition">
                    Learn More
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-full font-medium transition">
                    Schedule a Demo
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              <div
                className="flex-1 relative z-10 flex justify-center"
                data-aos={isReverse ? "fade-right" : "fade-left"}
                data-aos-delay="400"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md lg:max-w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

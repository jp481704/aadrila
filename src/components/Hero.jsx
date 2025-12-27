import React, { useEffect } from "react";
import HeroImage from "../assets/bg_image/hero_bg.png";
import GridPattern from "../assets/pattern.png"; 
import sliderImage1 from "../assets/License.png";
import sliderImage2 from "../assets/Invocie.png";
import sliderImage3 from "../assets/doc.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Hero = () => {
  const SWAP_SPEED = 3000;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${GridPattern})`,
            backgroundSize: "60px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-28">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* LEFT CONTENT */}
            <div
              className="flex flex-col justify-center text-center md:text-left"
              data-aos="fade-right"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <span className="block text-[#1A1A1A]">
                  Document Automation
                </span>
                <span className="block text-[#1A1A1A]">
                  & Fraud Detection
                </span>
              </h1>

              <p className="mt-5 text-gray-600 text-base sm:text-lg md:text-xl font-medium max-w-lg mx-auto md:mx-0">
                Enhance security, accuracy, and efficiency with our cutting-edge AI solutions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white font-medium shadow-md">
                  Get a Demo
                </button>
                <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white font-medium shadow-md">
                  Explore Solutions
                </button>
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div
              className="relative w-full md:w-[600px] flex justify-center"
              style={{ "--scan-duration": `${SWAP_SPEED}ms` }}
              data-aos="fade-left"
            >
              <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                loop
                speed={2000}
                autoplay={{ delay: SWAP_SPEED, disableOnInteraction: false }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 150,
                  depth: 250,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="hero-swiper hero-blur-slider w-full max-w-[320px] sm:max-w-[420px] md:max-w-full"
              >
                {[sliderImage1, sliderImage2, sliderImage3,sliderImage1, sliderImage2, sliderImage3].map(
                  (img, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center"
                      style={{ width: "280px" }}
                    >
                      <div className="scanner-container relative">
                        <img
                          src={img}
                          alt="doc"
                          className="w-full h-auto rounded-lg"
                        />

                        <div className="net-scan-bar-wrapper">
                          <div className="net-scan-edge"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES (UNCHANGED LOGIC) */}
      <style>{`
.hero-swiper { overflow: visible !important; }

.hero-blur-slider .swiper-slide {
  transition: all 0.6s ease;
  filter: blur(4px);
  opacity: 0.2;
  transform: scale(0.7);
}

.hero-blur-slider .swiper-slide-active {
  opacity: 1;
  filter: blur(0);
  z-index: 50;
  transform: scale(1.15) !important;
}

.hero-blur-slider .swiper-slide-prev,
.hero-blur-slider .swiper-slide-next {
  opacity: 0.6;
  filter: blur(0);
  z-index: 30;
  transform: scale(0.9) !important;
}

/* SCAN BAR */
.net-scan-bar-wrapper {
  display: none;
  position: absolute;
  left: 10%;
  width: 80%;
  height: 20px;
  z-index: 10;
  pointer-events: none;
}

.swiper-slide-active .net-scan-bar-wrapper {
  display: block;
  animation: netScanMove var(--scan-duration) linear infinite alternate;
}

.net-scan-edge {
  position: absolute;
  inset: 0;
  background-color: #A855F7;
  mask-image: url(${GridPattern});
  mask-size: 150px;
  mask-repeat: repeat;
}

@keyframes netScanMove {
  0% { top: 0%; opacity: 0.3; }
  50% { opacity: 1; }
  100% { top: calc(100% - 20px); opacity: 0.3; }
}
`}</style>
    </>
  );
};

export default Hero;

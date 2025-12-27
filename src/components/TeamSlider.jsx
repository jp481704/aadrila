import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import team_1 from "../assets/team_1.png";
import team_2 from "../assets/team_2.png";
import team_3 from "../assets/team_3.png";
import right from "../assets/bg_image/right.png";
import small_dot from "../assets/bg_image/small_dot.png";

const teamMembers = [
  {
    id: 1,
    name: "MANSI SHUKLA",
    role: "CEO FutureSphere",
    bio: "For this time-constrained generation in a NOW economy...",
    image: team_1,
  },
  {
    id: 2,
    name: "ALEX RIVERA",
    role: "CTO TechVision",
    bio: "Building infrastructure that scales with human ambition.",
    image: team_2,
  },
  {
    id: 3,
    name: "JORDAN SMITH",
    role: "Design Lead",
    bio: "Aesthetics meet functionality.",
    image: team_3,
  },
   {
    id: 4,
    name: "MANSI SHUKLA",
    role: "CEO FutureSphere",
    bio: "For this time-constrained generation in a NOW economy...",
    image: team_1,
  },
  {
    id: 5,
    name: "ALEX RIVERA",
    role: "CTO TechVision",
    bio: "Building infrastructure that scales with human ambition.",
    image: team_2,
  },
  {
    id: 6,
    name: "JORDAN SMITH",
    role: "Design Lead",
    bio: "Aesthetics meet functionality.",
    image: team_3,
  },
];

const TeamSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* RIGHT ARC – comes from RIGHT */}
      <img
        src={right}
        alt="right circle"
        className="absolute -left-56 top-4 w-[40%] opacity-60"
        data-aos="fade-left"
      />

      {/* DOT GRID – comes from LEFT */}
      <img
        src={small_dot}
        alt="small dot"
        className="absolute right-16 top-10 opacity-60 hidden lg:block"
        data-aos="fade-right"
        data-aos-delay="200"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER – fade down */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet our team
          </h2>
          <p className="text-[18px]">
                <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)]
                               bg-clip-text text-transparent">
       Meet our passionate and talented team, committed to delivering exceptional results, 
          </span>
          <br/>
          <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)]
                               bg-clip-text text-transparent">driving innovation, and transforming your vision into reality.</span>
          </p>
      
        </div>

        {/* NAV BUTTONS */}
        <div
          className="flex justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button
            ref={prevRef}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            <ChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* SLIDER – fade up LAST */}
        <div
          className="max-w-[100%] lg:max-w-[50%] mx-auto overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            slidesPerView={2}
            centeredSlides
            loop
            grabCursor
            speed={600}
            spaceBetween={0}
               breakpoints={{
              1024: {
                slidesPerView: 2, // ✅ desktop SAME
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 160,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                {({ isActive }) => (
                  <div className="flex flex-col items-center">
                    <div
                      className={`transition-all duration-500 ${
                        isActive
                          ? "scale-110 opacity-100"
                          : "scale-75 opacity-40"
                      }`}
                    >
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-200 shadow-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                 <div
  className={`relative mt-8 w-[420px] bg-blue-600 text-white text-center p-8 rounded-2xl transition-all duration-300
    before:content-[''] before:absolute before:-top-3
    before:left-1/2 before:-translate-x-1/2
    before:border-l-[14px] before:border-r-[14px] before:border-b-[14px]
    before:border-l-transparent before:border-r-transparent
    before:border-b-blue-600
    ${
      isActive
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
    }`}
>
                      <h3 className="text-xl font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-orange-400 mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm text-blue-50">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;

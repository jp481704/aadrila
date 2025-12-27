import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";

import small_dot from "../assets/bg_image/small_dot.png";
import big_dot from "../assets/bg_image/big_dot.png";

const blogs = [
  {
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    title: "Scaling SaaS Infrastructure in 2024",
    date: "10 Aug, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
];

const Blog = () => {
  useEffect(() => {
 AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  mirror: true,
  offset: 120,
});

  }, []);

  return (
    <section className="relative bg-white py-10">
      
      <img
        src={small_dot}
        alt="dots"
        data-aos="fade-right"
        className="absolute left-20 top-15 lg:block hidden"
      />

      <div
        className="text-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Blogs
        </h2>

        <p className="text-gray-500 mx-auto text-[24px]">
          <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
          <br />
          <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
            Lorem Ipsum has been the industry’s standard.
          </span>
        </p>
      </div>

      <img
        src={big_dot}
        alt=""
        data-aos="fade-left"
       className="absolute right-[11%] top-[32%] hidden lg:block"

      />

      <div
        className="max-w-7xl mx-auto px-6"
        data-aos="fade-up"
      >
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={32}
          navigation={{
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative pb-10 h-full"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="absolute inset-x-0 bottom-0 h-[40%] rounded-2xl bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 opacity-80"></div>

                <div className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm w-[90%] mx-auto h-full min-h-[250px]">
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-blue-500 mb-3">
                    {blog.date}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-8 relative z-10">
          <button className="blog-prev w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition cursor-pointer">
            <ArrowLeft />
          </button>
          <button className="blog-next w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

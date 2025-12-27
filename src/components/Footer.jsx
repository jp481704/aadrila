import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-500 text-base sm:text-lg max-w-2xl">
              <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
                Lorem Ipsum is simply dummy text of the printing and
              </span>
              <br />
              <span className="bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
                typesetting industry. Lorem Ipsum has been the industry’s standard.
              </span>
            </p>

            <div className="mt-8 space-y-6 text-gray-700">
              <div>
                <p className="font-semibold text-lg">📍 U.S. Office</p>
                <p className="mt-2 text-base">
                  Aadrila Technologies INC, <br />
                  8 The Green, Ste R, Dover, Kent, Zip Code 19901.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg">📍 India Office</p>
                <p className="mt-2 text-base">
                  Aadrila Technologies Private Limited, <br />
                  Unit 707, Lotus Trade Centre, Andheri West, Mumbai 400053.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-10" data-aos="fade-up">
            <FormCard />
          </div>
        </div>
      </section>

      <footer
        className="relative bg-[#3E6EB4] pt-24 lg:pt-44 pb-10"
        data-aos="fade-up"
      >
        <div
          className="hidden lg:block absolute top-0 right-24 -translate-y-1/2 w-[520px] z-20"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <FormCard />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm text-white">
          <p className="mb-3">
            © 2025 by Aadrila Technologies Private Limited CIN
            U74999UP2017PTC094688
          </p>
          <p>
            Registered Address: B-1, 127/K, Sector K Aliganj, Lucknow, Uttar
            Pradesh, India, 226024
          </p>
        </div>
      </footer>

      <style>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
        }

        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `}</style>
    </>
  );
};


const FormCard = () => (
  <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 w-full relative mt-[30em] md:mt-0">
    <form className="space-y-4 absolute bottom-[-30%] left-0 w-full bg-white p-6 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Phone Number" />
        <input className="input" placeholder="Company Name" />
      </div>

      <input className="input" placeholder="Inquiry Type" />

      <textarea
        rows="4"
        className="input resize-none"
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Send Inquiry
      </button>
    </form>
  </div>
);

export default Footer;

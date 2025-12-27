import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = ({ loading }) => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [loading]);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Industries", path: "/#industries" },
    { label: "Products", path: "/#products" },
    { label: "Blog", path: "/#blog" },
    { label: "Contact Us", path: "/#contact" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-40 bg-white/30 backdrop-blur-md transition-opacity ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              id="navbar-logo"
              src={Logo}
              alt="Logo"
              style={{ opacity: 0 }} 
              className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className="text-sm font-medium text-gray-700 hover:text-[#3E6EB4]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button className="hidden lg:inline-flex bg-[#3E6EB4] text-white px-6 py-2.5 rounded-full text-sm font-medium">
            Get a Demo
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  navigate(link.path);
                  setMenuOpen(false);
                }}
                className="text-base font-medium text-gray-700 text-left px-2"
              >
                {link.label}
              </button>
            ))}

            <button className="mt-4 bg-[#3E6EB4] text-white py-3 rounded-full text-sm font-medium">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

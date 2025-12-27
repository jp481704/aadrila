import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/logo.png";

const LogoLoader = ({ onFinish }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

useEffect(() => {
  const navbarLogo = document.getElementById("navbar-logo");
  const loaderLogo = logoRef.current;

  if (!navbarLogo || !loaderLogo) return;

  const loaderRect = loaderLogo.getBoundingClientRect();
  const navbarRect = navbarLogo.getBoundingClientRect();

  const x =
    navbarRect.left +
    navbarRect.width / 2 -
    (loaderRect.left + loaderRect.width / 2);

  const y =
    navbarRect.top +
    navbarRect.height / 2 -
    (loaderRect.top + loaderRect.height / 2);

  const scale = navbarRect.width / loaderRect.width;

  // 🔒 lock loader logo
  gsap.set(loaderLogo, {
    position: "fixed",
    left: loaderRect.left,
    top: loaderRect.top,
    opacity: 1,
  });

  // 🔒 navbar hidden once, React won't touch again
  gsap.set(navbarLogo, { opacity: 0 });

  const tl = gsap.timeline({
    defaults: { overwrite: "auto" },
  });

  tl.to(loaderLogo, {
    scale: 1,
    duration: 0.4,
    ease: "power2.out",
  })
    .to(loaderLogo, {
      x,
      y,
      scale,
      duration: 1.1,
      ease: "expo.inOut",
    })

    // 🔥 EXACT SAME FRAME SWITCH
    .add(() => {
      navbarLogo.style.opacity = "1";
      loaderLogo.style.opacity = "0";
    })

    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.35,
      onComplete: onFinish,
    });
}, [onFinish]);





  return (
    <div ref={loaderRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <img
        ref={logoRef}
        src={Logo}
        alt="Loading..."
        className="w-48 md:w-56 object-contain will-change-transform"
      />
    </div>
  );
};

export default LogoLoader;
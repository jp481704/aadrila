import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Application from "../components/Application";
import Blog from "../components/Blog";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <Application />
      <Features />
      <Blog />
    </main>
  );
};

export default Home;

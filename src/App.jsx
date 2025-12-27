import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import LogoLoader from "./components/LogoLoader";
import Footer from "./components/Footer";

function App() {
  const hasLoadedOnce = useRef(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleFinish = () => {
    hasLoadedOnce.current = true;
    setShowLoader(false);
  };

  return (
    <BrowserRouter>
      <Navbar loading={showLoader} />

      {!hasLoadedOnce.current && showLoader && (
        <LogoLoader onFinish={handleFinish} />
      )}

      <main className={showLoader ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
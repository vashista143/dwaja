import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import OurSends from "./pages/OurSends";
import Contact from "./pages/Contact";
import PoliticalServices from "./pages/PoliticalServices";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services/political-services" element={<PoliticalServices/>} />
        <Route path="/services/brand-promotions" element={<Home />} />
        <Route path="/services/influencer-services" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-sends" element={<OurSends />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
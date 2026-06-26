import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
const slides = [
  { id: 1, image: "/1st.jpeg", link:"/services/political-services" },
  { id: 2, image: "/2nd.png", link:"/services/political-services" },
  { id: 3, image: "/3rd.png", link:"/services/political-services" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

const onTouchStart = (e) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;

  if (isLeftSwipe) {
    nextSlide();
  }

  if (isRightSwipe) {
    prevSlide();
  }
};
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div
className="relative pt-5 h-[30vh] sm:h-[40vh] md:h-auto lg:h-auto"
    >
      {/* Slides */}
<div className="relative w-full h-full flex items-center justify-center"  onTouchStart={onTouchStart}  onTouchMove={onTouchMove}  onTouchEnd={onTouchEnd}>        
 <NavLink to={slides[current].link}>
    <img
      src={slides[current].image}
      alt=""
      className="w-full max-h-[400px] object-contain transition-all duration-700 cursor-pointer"
    />
  </NavLink>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2
        bg-white/20 backdrop-blur-sm md:p-3 rounded-full
        hover:bg-white/40 text-white"
      >
        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-500">
        <ChevronLeft size={30} />
        </div>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2
        bg-white/20 backdrop-blur-sm md:p-3 rounded-full
        hover:bg-white/40 text-white"
      >
        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-500">
        <ChevronRight size={30} />
        </div>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
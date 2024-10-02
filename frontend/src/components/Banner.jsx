import React from "react";

const Banner = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-800 text-white select-none">
      <div className="py-2 md:py-3 animate-marquee whitespace-nowrap">
        <span className="text-sm md:text-md mx-4">OPENING SOON!!!</span>
        <span className="text-sm md:text-md mx-4">MEGA OPENING DEALS ARE COMING LIVE!!</span>
        <span className="text-sm md:text-md mx-4">FREE DELIVERY on FIRST ORDER!!</span>
        <span className="text-sm md:text-md mx-4">COMING SOON TO YOUR COLLEGE!!!</span>
        <span className="text-sm md:text-md mx-4">
          FREE DELIVERY on orders ABOVE 299/-
        </span>
      </div>
      <div className="absolute top-0 py-2 md:py-3 animate-marquee2 whitespace-nowrap">
        <span className="text-sm md:text-md mx-4">OPENING SOON!!!</span>
        <span className="text-sm md:text-md mx-4">MEGA OPENING DEALS ARE COMING LIVE!!</span>
        <span className="text-sm md:text-md mx-4">FREE DELIVERY on YOUR FIRST ORDER!!</span>
        <span className="text-sm md:text-md mx-4">COMING SOON TO YOUR COLLEGE!!!</span>
        <span className="text-sm md:text-md mx-4">
          FREE DELIVERY on orders ABOVE 299/-
        </span>
      </div>
    </div>
  );
};

export default Banner;

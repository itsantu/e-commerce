import React from "react";

const Hero = () => {
  return (
    <>
      <div className="min-h-[500px] h-[500px] md:h-[600px] w-full bg-white flex justify-center items-center p-5">
        <div className="w-[95%] h-[95%] rounded-2xl bg-yellow-300 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542059765-8a5aff6c0dc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      
    </>
  );
};

export default Hero;

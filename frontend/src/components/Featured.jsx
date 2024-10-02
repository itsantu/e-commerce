import React from "react";
import Card from "./Card";

const Featured = () => {
  const items = [
    { cardTitle: "Nike Shoes", cardText: "Rs.299" },
    { cardTitle: "Nike Shoes", cardText: "Rs.299" },
    { cardTitle: "Nike Shoes", cardText: "Rs.299" },
    { cardTitle: "Nike Shoes", cardText: "Rs.299" },
    { cardTitle: "Nike Shoes", cardText: "Rs.299" },
  ];
  return (
    <div className="bg-gray-100 text-center py-10 px-5">
      <h2 className="text-2xl md:text-[3.5rem] font-semibold py-2 md:py-4">
        Our Bestsellers are
      </h2>
      <div
        id="featured-container"
        className=" flex flex-wrap gap-2 justify-center items-center px-4 py-10 overflow-hidden"
      >
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;

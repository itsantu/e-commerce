import React from "react";
import Card from "./Card";
import DealsCard from "./DealsCard";

const BestDeals = () => {
  const items = [
    {
      cardTitle: "T-shirts",
      cardText: "₹249",
      src: "https://5.imimg.com/data5/SELLER/Default/2023/1/XY/MF/UH/102736043/funny-printed-tshirts.jpg",
    },
    {
      cardTitle: "Kurtis",
      cardText: "₹299",
      src: "https://img0.junaroad.com/uiproducts/20215266/zoom_0-1693245033.jpg",
    },
    {
      cardTitle: "Shirts",
      cardText: "₹399",
      src: "https://img0.junaroad.com/uiproducts/19126280/zoom_0-1673529652.jpg",
    },
    {
      cardTitle: "Tops",
      cardText: "₹249",
      src: "https://images.meesho.com/images/products/159734167/bfodn_512.webp",
    },
    {
      cardTitle: "Mobile Covers",
      cardText: "₹99",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsVPb6Gg92QMzoyYG1vCLlDY3oJTOOY1yBjkSOw3dR516gY0M5otuqK5xjUNckoGnZFE&usqp=CAU",
    },
    {
      cardTitle: "Mobile Covers",
      cardText: "₹99",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsVPb6Gg92QMzoyYG1vCLlDY3oJTOOY1yBjkSOw3dR516gY0M5otuqK5xjUNckoGnZFE&usqp=CAU",
    },
  ];
  return (
    <div className="text-center py-10 px-5">
      <h2 className="text-2xl md:text-[3.5rem] font-semibold py-2 md:py-4">
        Hot Deals on
      </h2>
      <div
        id="bestdeals-container"
        className=" flex flex-wrap gap-2 md:gap-4 justify-center items-center px-4 py-10 overflow-hidden"
      >
        {items.map((item, index) => (
          <DealsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
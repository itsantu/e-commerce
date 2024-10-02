import React from "react";

const Categories = () => {
  const items = [
    { name: "Man" , link: "https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Women", link: "https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg"},
    { name: "Accesories", link: 'https://threadcurve.com/wp-content/uploads/2020/06/fashion-accessories-for-men-june72020-1-min.jpg' },
    { name: "Mobile Cases", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7RTnW-wdlONY54l6M75O78NES9Y1ChI41g&s" },
  ];
  return (
    <div
      id="category-container"
      className="flex flex-wrap gap-10 md:gap-20 justify-center items-center m-10 "
    >
      {items.map((item) => (
        <div
          key={item.name}
          id="categories"
          className="group relative flex justify-center items-center w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bg-yellow-500 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xlarge duration-300 transition-all ease-in-out"
        >
          <img className="w-full h-full object-cover group-hover:scale-125 transition-all ease-in-out duration-300" src={item.link} alt={item.name}/>
          <div className="overlay absolute w-[100%] h-[100%] flex justify-center items-center font-bold text-lg md:text-2xl text-white bg-slate-800 bg-opacity-25 opacity-0 group-hover:opacity-100 ease-in-out duration-300">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;

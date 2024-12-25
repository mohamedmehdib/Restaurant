import React from "react";

const FoodData = [
  {
    image: "/3.png",
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "/4.png",
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "/5.png",
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const TopList = () => {
  return (
    <div id="menu" className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;

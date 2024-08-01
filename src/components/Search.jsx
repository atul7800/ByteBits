import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import banner from "../assets/images/banner.jpg";

function Search() {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "React Native",
    },
    {
      id: 4,
      name: "Angular",
    },
    {
      id: 5,
      name: "UI/UX",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-8 flex flex-col justify-center lg:px-[150px]">
      <img className="rounded-2xl" src={banner} alt="banner img" />
      <div className="mx-[10%] mt-[-25px] flex items-center justify-between gap-2 rounded-lg bg-white p-3 text-[20px] shadow-lg md:mx-[20%]">
        <input className="outline-none" type="text" placeholder="Search" />
        <CiSearch className="text-[22px] text-gray-500" />
      </div>

      {/* filter options */}
      <div className="mt-5 flex justify-center gap-5 sm:gap-10">
        {tags.map((item, index) => (
          <ul
            onClick={() => setActiveIndex(index)}
            className={`${index === activeIndex ? "bg-red-500 text-white" : null} ${index !== activeIndex ? "hover:scale-110 hover:border-[1px] hover:bg-white" : null} cursor-pointer rounded-lg border-red-500 p-2 px-3 transition-all duration-100 ease-in-out md:rounded-full md:px-4`}
            key={index}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;

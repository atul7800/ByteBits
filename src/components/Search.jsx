import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import banner from "../assets/images/banner.png";

function Search({ setSelectedTag }) {
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
      name: "C",
    },
    {
      id: 6,
      name: "C++",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearch = () => {
    setSelectedTag(searchInputValue);
    console.log(searchInputValue);
  };

  // useEffect(() => {
  //   console.log(searchInputValue);
  // }, [searchInputValue]);

  const handleOnChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="mt-8 flex flex-col justify-center md:px-[25px] lg:px-[100px]">
      <img className="rounded-2xl" src={banner} alt="banner img" />
      <div className="mx-[10%] mt-[-25px] flex items-center justify-between gap-2 rounded-lg bg-white p-3 px-5 text-[20px] shadow-lg md:mx-[20%]">
        <input
          onChange={handleOnChange}
          value={searchInputValue}
          className="id outline-none"
          type="text"
          placeholder="Search"
        />
        <CiSearch
          onClick={() => handleSearch()}
          className="text-[22px] text-gray-500"
        />
      </div>

      {/* filter options */}
      <div className="mt-8 flex justify-center gap-5 sm:gap-10">
        {tags.map((item, index) => (
          <ul
            onClick={() => {
              setActiveIndex(index);
              setSelectedTag(item.name);
            }}
            className={`${index === activeIndex ? "bg-red-500 text-white" : null} ${index !== activeIndex ? "hover:scale-110 hover:border-[1px] hover:bg-white" : null} flex cursor-pointer items-center justify-center rounded-lg border-red-500 p-2 px-3 text-center transition-all duration-100 ease-in-out md:rounded-full md:px-4`}
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

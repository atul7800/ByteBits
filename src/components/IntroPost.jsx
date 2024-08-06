import React, { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import pp1 from "../assets/images/pp1.jpg";

function IntroPost({ posts }) {
  const imageURL = "http://localhost:1337" + posts.coverImg;
  const renderContent = (descriptionContent) => {
    return descriptionContent.map((block, index) => {
      if (block.type === "paragraph") {
        return (
          <p key={index} className="line-clamp-5 text-gray-500">
            {block.children.map((child, childIndex) => {
              if (child.type === "text") {
                return (
                  <span
                    key={childIndex}
                    style={{ fontWeight: child.bold ? "bold" : "" }}
                  >
                    {child.text}
                  </span>
                );
              }
              return null;
            })}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-[25px] lg:px-[0px]">
      <img
        className="h-full w-full rounded-xl object-cover"
        src={imageURL}
        alt=""
      />
      <div>
        <h4 className="text-red-500">{posts.tags}</h4>
        <h2
          className="mt-1 text-[25px] font-bold"
          style={{ fontWeight: "bold" }}
        >
          {posts.title}
        </h2>
        {renderContent(posts.desc)}
        <div>
          <img className="w-[50px] rounded-full" src={pp1} alt="Profile pic" />
          <div className="ml-2">
            <h3 className="font-bold">Mark colin</h3>
            <h3 className="text-gray-400">25 Feb 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;

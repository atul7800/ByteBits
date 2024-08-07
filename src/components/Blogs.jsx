import React from "react";
import pp1 from "../assets/images/pp1.jpg";

function Blogs({ posts }) {
  const baseURL = "http://localhost:1337";
  const renderContent = (descriptionContent) => {
    return descriptionContent.map((block, index) => {
      if (block.type === "paragraph") {
        return (
          <p key={index} className="mt-2 line-clamp-4 text-gray-600">
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
    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:px-[25px] lg:grid-cols-3 lg:px-[0px]">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <img
            className="h-full w-full rounded-3xl object-cover"
            src={baseURL + post.coverImg}
            alt="Image not found"
          />
          <div>
            <h4 className="mt-2 text-red-500">{post.tags}</h4>
            <h2
              className="line mt-2 text-[25px] font-bold leading-[1.2]"
              style={{ fontWeight: "bold" }}
            >
              {post.title}
            </h2>
            {renderContent(post.desc)}
            <div className="mt-5 flex items-center">
              <img
                className="h-[35px] w-[35px] rounded-full"
                src={pp1}
                alt="Profile pic"
              />
              <div className="ml-2">
                <h3 className="text-[14px] font-bold">Mark Colin</h3>
                <h3 className="text-[12px] text-gray-400">25 Feb 2024</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;

import React from "react";
import pp1 from "../assets/images/pp1.jpg";
import { useNavigate } from "react-router-dom";
import RenderDescription from "./RenderDescription";

function IntroPost({ posts }) {
  const navigate = useNavigate();
  const imageURL = "http://localhost:1337" + posts.coverImg;

  return (
    <div
      onClick={() => navigate("blog-detail/" + posts.id)}
      className="mt-12 grid cursor-pointer grid-cols-1 gap-8 md:grid-cols-2 md:px-[25px] lg:px-[0px]"
    >
      <img
        className="h-full w-full rounded-2xl object-cover"
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
        {/* {renderContent(posts.desc)} */}
        <RenderDescription
          descriptionContent={posts.desc}
          lineClamp={"line-clamp-4"}
        />
        <div className="mt-5 flex items-center">
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={pp1}
            alt="Profile pic"
          />
          <div className="ml-2">
            <h3 className="text-[16px] font-bold">Mark Colin</h3>
            <h3 className="text-[14px] text-gray-400">25 Feb 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;

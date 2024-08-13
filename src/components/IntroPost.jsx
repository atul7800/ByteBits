import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkEmoji from "remark-emoji";
import pp1 from "../assets/images/pp1.jpg";
import { useNavigate } from "react-router-dom";
import RenderDescription from "./RenderDescription";

function IntroPost({ posts }) {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_URL;
  const imageURL = base_url + posts.coverImg;
  console.log(imageURL);
  const [isVisible, setIsVisible] = useState(window.innerWidth > 640);

  useEffect(() => {
    //to handle window resize
    const handleResize = () => {
      setIsVisible(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ display: isVisible ? "grid" : "none" }}
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
          className="mt-1 text-[25px] font-bold leading-8"
          style={{ fontWeight: "bold" }}
        >
          {posts.title}
        </h2>
        <ReactMarkdown
          className="markDown line-clamp-4 leading-7"
          children={posts.desc}
          remarkPlugins={[remarkGfm, remarkEmoji]}
          rehypePlugins={[rehypeRaw]}
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

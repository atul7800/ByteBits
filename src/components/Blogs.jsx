import React from "react";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";
import pp1 from "../assets/images/pp1.jpg";
import { useNavigate } from "react-router-dom";
import RenderDescription from "./RenderDescription";
import BlogsShimmer from "../shimmers/BlogsShimmer";

function Blogs({ posts }) {
  const navigate = useNavigate();
  const baseURL = "http://localhost:1337";

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:px-[25px] lg:grid-cols-3 lg:px-[0px]">
        {posts.map((post) => (
          <div
            onClick={() => navigate("blog-detail/" + post.id)}
            key={post.id}
            className="flex cursor-pointer flex-col items-center justify-center"
          >
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
              {/* {renderContent(post.desc)} */}
              {/* <RenderDescription
                descriptionContent={post.desc}
                lineClamp={"line-clamp-4"}
              /> */}
              <Markdown className="line-clamp-4 leading-7">
                {post.desc}
              </Markdown>

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
    </>
  );
}

export default Blogs;

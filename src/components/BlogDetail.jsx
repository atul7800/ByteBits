import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkEmoji from "remark-emoji";
import GlobalAPI from "../services/GlobalAPI";
import pp1 from "../assets/images/pp1.jpg";
import RenderDescription from "./RenderDescription";
import BlogDetailShimmer from "../shimmers/BlogDetailShimmer";

function BlogDetail() {
  const { id } = useParams();
  const baseURL = "http://localhost:1337";
  const [post, setPost] = useState({});
  const imageURL = baseURL + post.coverImg;
  useEffect(() => {
    getPost(id);
  }, []);

  const getPost = (id) => {
    if (id) {
      GlobalAPI.getPostsByID(id)
        .then((res) => {
          const data = res.data.data;
          if (data) {
            const result = {
              id: data.attributes.id,
              title: data.attributes.title,
              desc: data.attributes.description,
              tags: data.attributes.tags,
              coverImg: data.attributes.coverImage.data.attributes.url,
            };
            setPost(result);
          } else {
            console.error("Empty");
            setPost(null);
          }
        })
        .catch((error) => {
          console.log("Error fetching data: ", error);
          setPost(null);
        });
    }
  };

  // const renderContent = (descriptionContent) => {
  //   return (descriptionContent || []).map((block, index) => {
  //     if (block.type === "paragraph") {
  //       return (
  //         <p key={index} className="line-clamp-5 text-gray-600">
  //           {block.children.map((child, childIndex) => {
  //             if (child.type === "text") {
  //               return (
  //                 <span
  //                   key={childIndex}
  //                   style={{ fontWeight: child.bold ? "bold" : "" }}
  //                 >
  //                   {child.text}
  //                 </span>
  //               );
  //             }
  //             return null;
  //           })}
  //         </p>
  //       );
  //     }
  //     return null;
  //   });
  // };

  return (
    <div className="mt-12 grid cursor-pointer grid-cols-1 gap-8 md:px-[25px] lg:px-[0px]">
      <>
        {post != null ||
        post != undefined ||
        imageURL != null ||
        imageURL != undefined ? (
          <>
            <div>
              <h4 className="text-red-500">{post.tags}</h4>
              <h2
                className="mt-1 text-[30px] font-bold leading-[1.3]"
                style={{ fontWeight: "bold" }}
              >
                {post.title}
              </h2>
              <div className="mt-3 flex items-center">
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
            <div>
              <img
                className="mb-6 h-full max-h-[450px] w-full rounded-2xl object-cover"
                src={imageURL}
                alt="Asset loading"
              />
              {/* <RenderDescription descriptionContent={post.desc} /> */}
              <ReactMarkdown
                className="markDown leading-7"
                children={post.desc}
                remarkPlugins={[remarkGfm, remarkEmoji]}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
          </>
        ) : (
          <BlogDetailShimmer />
        )}
      </>
    </div>
  );
}

export default BlogDetail;

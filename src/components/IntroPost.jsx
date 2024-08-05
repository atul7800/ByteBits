import React, { useEffect, useState } from "react";

function IntroPost({ posts }) {
  console.log(posts);
  const renderContent = (descriptionContent) => {
    return descriptionContent.map((block, index) => {
      if (block.type === "paragraph") {
        return (
          <p key={index}>
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
    <div>
      <h4>{posts.tags}</h4>
      <h2 className="bold text-xl" style={{ fontWeight: "bold" }}>
        {posts.title}
      </h2>
      {renderContent(posts.desc)}
    </div>
  );
}

export default IntroPost;

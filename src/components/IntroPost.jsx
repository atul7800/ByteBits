import React, { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";

function IntroPost({ description }) {
  const renderContent = (contentData) => {
    return contentData.map((block, index) => {
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
      Intro post
      {renderContent(description)}
    </div>
  );
}

export default IntroPost;

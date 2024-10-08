import React from "react";

function RenderDescription({ descriptionContent, lineClamp = "" }) {
  return (descriptionContent || []).map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p key={index} className={`${lineClamp} text-gray-600`}>
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
}

export default RenderDescription;

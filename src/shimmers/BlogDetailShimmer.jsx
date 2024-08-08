import React from "react";

function BlogDetailShimmer() {
  return (
    <>
      <div className="flex cursor-pointer flex-col items-center justify-center">
        <div className="shimmer-wrapper w-full">
          <div
            className="shimmer h-[400px] w-full"
            style={{ borderRadius: "1rem" }}
          ></div>
        </div>
        <div className="shimmer-wrapper h-full w-full">
          <h4 className="shimmer mt-10 h-5 w-32"></h4>
          <h2 className="shimmer line mt-4 h-10 w-full text-[25px] font-bold leading-[1.2]"></h2>
          <p className="shimmer mt-4 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <p className="shimmer mt-2 h-5 w-full"></p>
          <div className="mt-10 flex items-center">
            <div
              className="shimmer circle h-[50px] w-[50px] rounded-full"
              style={{ borderRadius: "50%" }}
            ></div>
            <div className="ml-2">
              <h3 className="shimmer mb-1 h-5 w-24 text-[16px] font-bold"></h3>
              <h3 className="shimmer h-4 w-16 text-[14px]"></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailShimmer;

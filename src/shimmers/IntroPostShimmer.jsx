import React from "react";

function IntroPostShimmer({ showNoResults }) {
  return (
    <div className="mt-12 grid cursor-pointer grid-cols-1 gap-8 md:grid-cols-2 md:px-[25px] lg:px-[0px]">
      {showNoResults ? (
        "No post found"
      ) : (
        <>
          <div className="shimmer-wrapper h-full w-full">
            <div
              className="shimmer h-72 min-w-[200px] md:h-full"
              style={{ borderRadius: "1rem" }}
            ></div>
          </div>
          <div className="shimmer-wrapper h-full">
            <h4 className="shimmer h-5 w-24"></h4>
            <h2 className="shimmer mt-4 h-8 max-w-[600px] font-bold"></h2>
            <h4 className="shimmer mt-3 h-5 max-w-[600px]"></h4>
            <h4 className="shimmer mt-2 h-5 max-w-[600px]"></h4>
            <h4 className="shimmer mt-2 h-5 max-w-[600px]"></h4>
            <h4 className="shimmer mt-2 h-5 max-w-[600px]"></h4>
            <div className="mt-5 flex items-center">
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
        </>
      )}
    </div>
  );
}

export default IntroPostShimmer;

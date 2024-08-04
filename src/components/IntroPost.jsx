import React, { useEffect } from "react";
import GlobalAPI from "../services/GlobalAPI";

function IntroPost() {
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalAPI.getPost.then((res) => {
      // const { data } = res.data;
      const descriptionContent = res.data.data[0].attributes.description;
      console.log(descriptionContent);
      // descriptionContent.map((block, index));
    });
  };

  return <div>Intro post</div>;
}

export default IntroPost;

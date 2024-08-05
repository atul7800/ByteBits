import React, { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import Header from "../components/Header";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

function Home() {
  const [description, setDescription] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    GlobalAPI.getPost.then((res) => {
      const descriptionContent = res.data.data[0].attributes.description;
      console.log(res.data.data[0].attributes);
      setDescription(descriptionContent);
    });
  };

  return (
    <div>
      {/* header */}
      <Header />
      {/* Search */}
      <Search />
      {/* Intro post */}
      <IntroPost description={description} />
      {/* Blogs */}

      {/* Footer */}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import GlobalAPI from "../services/GlobalAPI";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    GlobalAPI.getPost.then((res) => {
      //const descriptionContent = res.data.data[0].attributes.description;
      //console.log(res.data.data);
      const result = res.data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tags: item.attributes.tags,
        cImage: item.attributes.coverImage.data.attributes.url,
      }));
      setPosts(result);
    });
  };

  return (
    <div>
      {/* header */}
      <Header />
      {/* Search */}
      <Search />
      {/* Intro post */}
      {posts.length > 0 ? <IntroPost posts={posts[0]} /> : null}
      {/* Blogs */}
      {/* Footer */}
    </div>
  );
}

export default Home;

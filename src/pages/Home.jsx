import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import IntroPost from "../components/IntroPost";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import GlobalAPI from "../services/GlobalAPI";
import IntroPostShimmer from "../shimmers/IntroPostShimmer";
import BlogsShimmer from "../shimmers/BlogsShimmer";

function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    GlobalAPI.getPost.then((res) => {
      const result = res.data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tags: item.attributes.tags,
        coverImg: item.attributes.coverImage.data.attributes.url,
      }));

      setPosts(result);
      setFilteredPosts(result);
    });
  };

  const filterPosts = (tag) => {
    const filteredResult = filteredPosts.filter((item) =>
      item.tags.toLowerCase().includes(tag.toLowerCase()),
    );
    if (tag === "All") {
      setPosts(filteredPosts);
      setShowNoResults(false);
      return;
    }

    if (filteredResult.length == 0) {
      setShowNoResults(true);
      return;
    }

    if (filteredResult.length > 0) {
      setShowNoResults(false);
      setPosts(filteredResult);
    }
  };

  return (
    <div>
      {/* Search */}
      <Search setSelectedTag={(tag) => filterPosts(tag)} />
      {/* Intro post */}
      {showNoResults ? (
        <h4 className="my-10 text-lg">No post found</h4>
      ) : (
        <>
          {posts.length > 0 ? (
            <IntroPost posts={posts[0]} />
          ) : (
            <IntroPostShimmer />
          )}

          {posts.length > 0 ? <Blogs posts={posts} /> : <BlogsShimmer />}
        </>
      )}
    </div>
  );
}

export default Home;

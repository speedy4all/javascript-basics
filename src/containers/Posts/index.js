import React, { useCallback, useEffect, useMemo, useState } from "react";

import PostsView from "../../components/PostsView";
import SearchView from "../../components/SearchView";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const fetchPosts = () =>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

  useEffect(() => {
    if (!searchParam) {
      fetchPosts();
    }
  }, [searchParam]);

    const filteredPosts = useMemo(() => {
      if (!searchParam) {
        return posts;
      }
      return posts.filter(({ body }) => body.includes(searchParam));
    }, [searchParam, posts]);

//   const filteredPosts = !searchParam
//     ? posts
//     : posts.filter(({ body }) => body.includes(searchParam));

  return (
    <>
      <SearchView search={searchParam} setSearch={setSearchParam} />
      <PostsView posts={filteredPosts} />
    </>
  );
}

Posts.propTypes = {};

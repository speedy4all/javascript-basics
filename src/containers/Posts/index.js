import React, { useEffect } from "react";

import PostsView from "../../components/PostsView";
import SearchView from "../../components/SearchView";

import { usePosts } from "../../contexts/PostsContext";

export default function Posts() {
  const { filteredPosts, searchParam, fetchPosts, setSearchParam } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <SearchView search={searchParam} setSearch={setSearchParam} />
      <PostsView posts={filteredPosts} />
    </>
  );
}

Posts.propTypes = {};

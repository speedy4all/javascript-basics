import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PostView from "../PostView";

export default function PostsView({ posts }) {
  useEffect(() => {
    // console.log("render PostsView list");
  }, [posts]);

  return (
    <div style={{ padding: 16 }}>
      {posts.map((post) => (
        <PostView key={post.id} {...post} />
      ))}
    </div>
  );
}

PostsView.propTypes = {
  posts: PropTypes.array.isRequired,
};

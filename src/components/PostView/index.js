import React from "react";
import PropTypes from "prop-types";
import Comments from "../Comments";

export default function PostView({ id, title, body, userId }) {
  return (
    <div style={{ textAlign: "left" }}>
      <h4>Title: {title}</h4>
      <p>Content: {body}</p>
      {/* <button
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        toggle comments
      </button>
      <Comments showComments={showComments} postId={id} /> */}
    </div>
  );
}

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};

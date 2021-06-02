import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavigationContext } from "../../containers/Home";
import { SINGLE_POST } from "../../routes";

export default function PostView({ id, title, body, userId, newData = false }) {
  const { navigateTo } = useContext(NavigationContext);

  const [newPost, setNewPost] = useState(null);

  const fetchNewData = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setNewPost(data));

  useEffect(() => {
    if (newData && !newPost) {
      fetchNewData();
    }
  }, [newData, newPost]);

  return (
    <div style={{ textAlign: "left" }}>
      {!newData ? (
        <>
          <button
            onClick={navigateTo({
              path: SINGLE_POST,
              args: { id, title, body },
            })}
          >
            Show details
          </button>
          <h4>Title: {title}</h4>
          <p>Content: {body}</p>
        </>
      ) : (
        <>
          <h3>New post details</h3>
          <h4>Title: {newPost?.title}</h4>
          <p>Content: {newPost?.body}</p>
        </>
      )}
    </div>
  );
}

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};

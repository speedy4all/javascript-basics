import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Link, useLocation, useParams} from "react-router-dom";

export default function PostView({ id, title, body, newData = false }) {
  let location = useLocation();
  let params = useParams();
  const {state} =location;

  const [newPost, setNewPost] = useState(null);

  const fetchNewData = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${params?.idPost}`)
      .then((response) => response.json())
      .then((data) => setNewPost(data));

  useEffect(() => {
    if(params?.idPost) {
      fetchNewData();
    }
  }, [state?.title]);


  return (
    <div style={{ textAlign: "left" }}>
      {!newData ? (
        <>
          <Link to={{pathname: `/posts/${id}`, state: {title, body, id}}}>
            Show details
          </Link>
          <h4>Title: {title}</h4>
          <p>Content: {body}</p>
        </>
      ) : (
        <>
          <h3>New post details</h3>
          <h4>Title: {state?.title || newPost?.title}</h4>
          <p>Content: {state?.body || newPost?.body}</p>
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

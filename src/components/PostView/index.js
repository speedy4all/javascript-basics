import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Link, useLocation, useParams} from "react-router-dom";
import CardCustom from "../CardCustom";

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
    <div>
      {!newData ? (
        <>
          <CardCustom title={title} body={body} id={id}/>
        </>
      ) : (
        <>
          <CardCustom title={state?.title || newPost?.title} body={state?.body || newPost?.body}/>
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

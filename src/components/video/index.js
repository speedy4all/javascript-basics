import React from "react";
import "./styles.css";

export default function Video(props) {
  return (
    <>
      <div className="video-container">
        <h4>{props.title}</h4>
        <iframe
          width="560"
          height="315"
          src={props.video_url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

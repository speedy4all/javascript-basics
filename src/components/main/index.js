import React from "react";
import Video from "../video";
import videoData from "../../data";
import "./styles.css";

export default function Main() {
  console.log("videoData: ", videoData);
  return (
    <main>
      <section>
        <div className="list-header">
          <h3>React course with Cassidy Williams</h3>
        </div>
        <div className="list-container">
          {videoData.map((video, idx) => {
            return <Video title={video.title} key={idx} video_url={video.video_url} />;
          })}
        </div>
      </section>
    </main>
  );
}

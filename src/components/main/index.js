import React from "react";
import './styles.css';

export default function Main() {
  return (
    <main>
      <section>
        <div class="list-header">
          <h3>React course with Cassidy Williams</h3>
        </div>
        <div class="list-container">
          <div class="video-container">
            <h4>React Workout: Reducers with Cassidy Williams</h4>
            <small>Session 1</small>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sf4spiPynBE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-container">
            <h4>
              React Workout: Intro to useState and useEffect with Cassidy
              Williams
            </h4>
            <small>Session 2</small>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GLuPJzl_Nv4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-container">
            <h4>Using Composition in React to Avoid "Prop Drilling"</h4>
            <small>Session 3</small>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3XaXKiXtNjw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-container">
            <h4>Navigation Blocking in history v5</h4>
            <small>Session 4</small>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kt1EwqBa7aA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-container">
            <h4>Navigation Blocking in history v5</h4>
            <small>Session 4 copy</small>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kt1EwqBa7aA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

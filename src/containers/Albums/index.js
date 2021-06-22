import React, { useEffect, useState } from "react";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = () =>
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h4>Albums</h4>
      {albums.map(({ id, title }) => (
        <div key={id}>{`Title: ${title}`}</div>
      ))}
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { ALBUM_ROUTE } from "../../routes";
import { NavigationContext } from "../Home";

export default function Todos() {
  const [todos, settodos] = useState([]);

  const { path, navigateTo } = useContext(NavigationContext);

  const fetchtodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => settodos(data));

  useEffect(() => {
    fetchtodos();
  }, []);

  return (
    <div style={{ textAlign: "left", padding: 50 }}>
      <h4>todos {`path: ${path}`}</h4>
      <button onClick={navigateTo({ path: ALBUM_ROUTE, args: null })}>
        Go to Albums
      </button>
      {todos.map(({ id, title, completed }) => (
        <div key={id}>
          {`Title: ${title}`}
          <div>{completed ? "Completed" : "Waiting"}</div>
        </div>
      ))}
    </div>
  );
}

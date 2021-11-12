import React from "react";

function Todo(props) {
  return (
    <div className="task">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Todo;

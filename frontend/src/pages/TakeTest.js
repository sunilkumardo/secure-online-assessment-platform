import React from "react";
import { useParams } from "react-router-dom";

function TakeTest() {
  const { id } = useParams();

  return (
    <div>
      <h2>Taking Test ID: {id}</h2>
      <p>Questions will be loaded here...</p>
    </div>
  );
}

export default TakeTest;

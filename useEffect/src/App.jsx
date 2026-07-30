import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(100);

  useEffect(
    function () {
      console.log("value of A change ");
    },
    [a],
  );
  useEffect(
    function () {
      console.log("value of B change ");
    },
    [b],
  );

  return (
    <div className="btn">
      <h1>value of A is {a}</h1>
      <h1>value of B is {b}</h1>

      <button onMouseEnter={() => setA(a + 1)}>change A</button>
      <button onMouseLeave={() => setB(b + 1)}>change B</button>
    </div>
  );
};

export default App;

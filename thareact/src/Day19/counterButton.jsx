import React, { useState } from "react";
import "./counter.css";
const CounterButton = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button
        className="CounterStyle"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterButton;

import React from "react";

const foodName = ({ props }) => {
  return (
    <div className="foodName">
      <h1>{props.food}</h1>
      <h3>
        {props.food} contains {props.calorie} amount of calories{" "}
      </h3>
    </div>
  );
};

export default foodName;

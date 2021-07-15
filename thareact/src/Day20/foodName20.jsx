import React from "react";

const FoodName20 = (props) => {
  return (
    <div className="foodName">
      <h1>{props.foodProp.food}</h1>
      <h3>
        {props.foodProp.food} contains {props.foodProp.calorie} amount of
        calories{" "}
      </h3>
    </div>
  );
};

export default FoodName20;

import React, { useState } from "react";
import data from "./elements20.json";
import FoodName from "./foodName20";
import "./foodCalorie20.css";

const FoodCalorie20 = () => {
  const [state, setState] = useState(data);
  return (
    <section className="foodContainer">
      {state.map((foodObj, ind) => {
        console.log(foodObj);
        return (
          <FoodName
            state={state}
            setState={setState}
            foodProp={foodObj}
            key={ind}
          />
        );
      })}
    </section>
  );
};

export default FoodCalorie20;

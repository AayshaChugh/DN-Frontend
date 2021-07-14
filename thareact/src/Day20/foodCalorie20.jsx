import React, { useState } from "react";
import data from "./elements20.json";
import FoodName from "./foodName20";
import "./foodCalorie20.css";

const foodCalorie20 = () => {
  const [state, setState] = useState(data);
  return (
    <section className="foodContainer">
      {state.map((food, id) => {
        console.log(food);
        return (
          <FoodName state={state} setState={setState} food={food} key={id} />
        );
      })}
    </section>
  );
};

export default foodCalorie20;

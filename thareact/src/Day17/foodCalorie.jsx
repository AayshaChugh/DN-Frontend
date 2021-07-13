import React from "react";
import data from "./elements.json";
import FoodName from "./foodName";
import "./foodCalorie.css";

const foodCalorie = () => {
  return (
    <section className="foodContainer">
      {data.map((food, id) => {
        console.log(food);
        return <FoodName key={id} props={food} />;
      })}
    </section>
  );
};

export default foodCalorie;

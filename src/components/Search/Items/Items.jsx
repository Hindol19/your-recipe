import React from "react";
import "./Items.scss";
import DemoPic from "../../../assets/itemPic.jpg";
function Items({ img, title, calories, cuisine, caution, mealType }) {
  console.log(caution);
  return (
    <div className="items-container">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="lower">
        <span className="title">{title}</span>
        <div className="desc">
          <div className="comp left">
            <span>
              <span className="prop">Calories:</span>
              {calories}
            </span>
            <span>
              <span className="prop">Cuisine Type:</span>
              {cuisine}
            </span>
          </div>
          <div className="comp right">
            <span>
              <span className="prop">Caution:</span>
              {caution}
            </span>
            <span>
              <span className="prop">Meal Type:</span>
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;

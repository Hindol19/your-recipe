import React, { useEffect, useState } from "react";
import "./SingleItem.scss";
import demo from "../../assets/itemPic.jpg";
import Items from "../Search/Items/Items";
import { useParams } from "react-router-dom";
import { fetchRecipeFromApi } from "../../utils/api";
function SingleItem({ setRecipeId, recipe }) {
  const { id } = useParams();
  // console.log(id);
  setRecipeId(id);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts or when isLoading becomes false
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log(recipe?.recipe?.ingredients);
  return (
    <div className="single-item-container">
      <div className={isLoading && "preloader"}></div>
      <div className="singleItem-layout">
        <div className="left-content">
          <Items
            img={recipe?.recipe?.image}
            title={recipe?.recipe?.label}
            calories={recipe?.recipe?.calories}
            cuisine={recipe?.recipe?.cuisineType[0]}
            caution={recipe?.recipe?.cautions[0]}
            mealType={recipe?.recipe?.mealType[0]}
          />
        </div>
        <div className="right-content">
          <h1>RECIPE</h1>
          <ul className="recipe-list">
            {recipe?.recipe?.ingredients.map((ing) => {
              return <li>{ing?.text}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;

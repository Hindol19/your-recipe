import React, { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import Items from "./Items/Items";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { fetchRecipeFromApi } from "../../utils/api";
function Search({ itemList, query, recipe_id, setSearch, setRecipe }) {
  const navigate = useNavigate();
  const makeApiCall = async (recipe_id_url) => {
    const res = await fetchRecipeFromApi(recipe_id_url);
    // console.log(res);
    setRecipe(res);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts or when isLoading becomes false
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="search-container">
      <div className={isLoading && "preloader"}></div>
      {!query.length && (
        <div className="query-none">
          <div className="text">
            Please Type Your Favourite Dish in the Search Box :)
          </div>
          <ScreenSearchDesktopIcon />
        </div>
      )}

      {!!query.length && (
        <div className="searched-items in-search-page">
          {itemList?.map((item) => {
            const uri = item?.recipe.uri;
            const recipe_id_url = uri.split("#")[1];
            // console.log(ar);
            return (
              <div
                className="itemContainer"
                onClick={() => {
                  // setSearch(true);
                  makeApiCall(recipe_id_url);
                  // setSearch(false);
                  navigate("/searched/" + recipe_id_url);
                }}
              >
                <Items
                  img={item?.recipe?.image}
                  title={item?.recipe?.label}
                  calories={item?.recipe?.calories}
                  cuisine={item?.recipe?.cuisineType[0]}
                  caution={item?.recipe?.cautions[0]}
                  mealType={item?.recipe?.mealType[0]}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;

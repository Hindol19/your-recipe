import axios from "axios";

export const fetchDataFromApi = async (query) => {
  try {
    //url is the end-point
    //params is for authorization
    const { data } = await axios.get(
      "https://api.edamam.com/api/recipes/v2?type=public&q=" +
        query +
        "&app_id=" +
        process.env.REACT_APP_API_ID +
        "&app_key=" +
        process.env.REACT_APP_API_KEY
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchRecipeFromApi = async (recipe_id) => {
  try {
    //url is the end-point
    //params is for authorization
    const { data } = await axios.get(
      "https://api.edamam.com/api/recipes/v2/" +
        recipe_id +
        "?type=public&app_id=" +
        process.env.REACT_APP_API_ID +
        "&app_key=" +
        process.env.REACT_APP_API_KEY +
        "&field=label&field=ingredients&field=image&field=calories&field=cautions&field=cuisineType&field=mealType"
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

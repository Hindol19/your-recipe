import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleItem from "./components/SingleItem/SingleItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [itemList, setItemList] = useState({});
  const [recipe, setRecipe] = useState({});
  const [recipeId, setRecipeId] = useState(0);

  // console.log(recipe);
  return (
    <BrowserRouter>
      <Header
        setItemList={setItemList}
        query={query}
        setQuery={setQuery}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/searched"
          element={
            <Search
              itemList={itemList}
              query={query}
              setRecipe={setRecipe}
              setSearch={setSearch}
              recipe_id={recipeId}
            />
          }
        />
        <Route
          path="/searched/:id"
          element={
            <SingleItem
              itemList={itemList}
              setRecipeId={setRecipeId}
              recipe={recipe}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

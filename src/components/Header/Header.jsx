import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";

function Header({ setItemList, query, setQuery, setSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(query);
    setData(res);
  };

  const handleClick = () => {
    setSearch(true);
    makeApiCall();
    setSearch(false);
    navigate("/searched");
    // console.log(data?.hits[0]?.recipe?.label);
  };
  console.log(data);
  setItemList(data?.hits);
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-container ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <div className="left" onClick={() => navigate("/")}>
          YOUR RECIPES
        </div>
        <div className="centre">
          <input
            type="text"
            placeholder="Search for recipes"
            onChange={handleChange}
          />
          <SearchIcon onClick={handleClick} />
        </div>
        <div className="right">
          <span className="about">About</span>
          <span className="saved">Saved Recipes</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

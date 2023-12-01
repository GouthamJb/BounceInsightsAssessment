import React, { useState } from "react";
import "../styles/SearchComponent.css"; // Import your stylesheet
import { useDispatch } from "react-redux";
import { clearMessage, countryDetails } from "../reducers/CountryReducer";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    clearMessage();
    dispatch(countryDetails(searchText));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter country name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;

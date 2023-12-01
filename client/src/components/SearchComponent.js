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
    setSearchText("");
   
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter country name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the default behavior of the Enter key (e.g., submitting a form)
            handleSearch();
          }
        }}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;

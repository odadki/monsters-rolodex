import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
export default SearchBox;

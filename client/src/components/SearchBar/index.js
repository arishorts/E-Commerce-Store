import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_SEARCH } from "../../utils/actions";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");
  const { currentSearch } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    dispatch({
      type: UPDATE_SEARCH,
      currentSearch: searchBar,
    });
    setSearchBar(""); // Reset the search bar to an empty string
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchBar({
      ...searchBar,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSearchSubmit}>
        <div className="flex-row mx-2 space-evenly my-2">
          <input
            placeholder="Search for an item"
            name="search"
            type="text"
            id="search"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;

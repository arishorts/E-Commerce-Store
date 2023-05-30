import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_SEARCH } from "../../utils/actions";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");
  const dispatch = useDispatch();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    dispatch({
      type: UPDATE_SEARCH,
      currentSearch: searchBar,
    });

    //why doesnt this reset work?
    setSearchBar(""); // Reset the search bar to an empty string
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
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;

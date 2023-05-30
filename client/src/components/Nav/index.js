import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UPDATE_SEARCH } from "../../utils/actions";
import SearchBar from "../SearchBar";

function Nav() {
  const dispatch = useDispatch();

  function handleBrandClick() {
    dispatch({
      type: UPDATE_SEARCH,
      currentSearch: "",
    });
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/" onClick={handleBrandClick}>
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
      <SearchBar />
    </header>
  );
}

export default Nav;

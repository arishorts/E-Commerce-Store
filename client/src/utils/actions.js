export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// copies the current state to a new object
// checks the database for alterations to the list of products
// returns the altered, new object copy

export const ADD_TO_CART = "ADD_TO_CART";
// copies the current state to a new object
// opens the cart
// returns the altered, new object copy with an updated products list

export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
// copies the current state to a new object
// returns the altered, new object copy with updated cart list of products

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// takes the current cart state and filters it to a new array
// returns the updated cart with an removed item

export const CLEAR_CART = "CLEAR_CART";
// copies the current state to a new object
// returns the altered, new object copy with an empty cart
// also closes the cart

export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
// copies the current state to a new object
// opens the cart if not already
// maps it to a new array
// returns the altered, new object copy with new purchase quantities

export const TOGGLE_CART = "TOGGLE_CART";
// copies the current state to a new object
// returns the altered, new object copy with opposite toggle card visibility

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// copies the current state to a new object
// checks the database for alterations to the list of filter categories
// returns the altered, new object copy

export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
// copies the current state to a new object
// changes the states current filter catergory to the user selection
// returns the altered, new object copy

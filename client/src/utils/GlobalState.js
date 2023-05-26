// import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'

import React from "react";
import { Provider } from "react-redux";
import store from "./store";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

export default function StoreProvider(props) {
  // const StoreProvider = (props) => {
  // const StoreProvider = ({ value = [], ...props }) => {
  //   const [state, dispatch] = useProductReducer({
  //     products: [],
  //     cart: [],
  //     cartOpen: false,
  //     categories: [],
  //     currentCategory: '',
  //   });

  return <Provider store={store} {...props} />;
  //  return <Provider value={[state, dispatch]} {...props} />;
}

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//configure store will give redux store

const Appstore = configureStore({
  //this reducer is responsible to modify the appstore
  //for each slice we will have reducer

  reducer: {
    cart : cartReducer, 
  },
});

export default Appstore;
//provide this store to your application

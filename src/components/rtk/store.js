import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product_reducer";
import { cartReducer } from "./cart_reducer";
import { filtering } from "./filter_reducer";

 export const Store=configureStore({
    reducer:{
        Products:productReducer,
        Cart:cartReducer,
        Filter:filtering
    }
})

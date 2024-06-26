import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product_reducer";
import { cartReducer } from "./cart_reducer";
import { filtering } from "./priceReducer";

 export const Store=configureStore({
    reducer:{
        Products:productReducer,
        Cart:cartReducer,
        Filter:filtering
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchProducts=createAsyncThunk("products/fetchProducts",async()=>{
        const res=await  fetch('https://fakestoreapi.com/products')
        const data=await res.json()
        
        return data
        
    })

let initialState={
    items:[],
    loading:false
}

const products=createSlice({
    initialState:initialState,
    name:"products",
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.items=action.payload
            state.loading=false
            
            
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
                state.loading=true
        })

    }
    
})

export const productReducer=products.reducer


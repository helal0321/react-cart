import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories=createAsyncThunk('Filtering/fetchCategories',async()=>{
    let res= await fetch('https://fakestoreapi.com/products/categories')
    let data=await res.json()
    return data
})

let initialState={
    category:[],
    priceMin:0,
    priceMax:1000000,
    selectedCategories:['all']
   
}

const Filtering=createSlice({
    name:"filter",
    initialState:initialState,
    reducers:{
        setPrice:(state,action)=>{
            if(action.payload.min!==undefined&& action.payload.max!==undefined){
                state.priceMax=action.payload.max
                state.priceMin=action.payload.min
            }


            
        },
        set_categories:(state,action)=>{
            
             state.selectedCategories=action.payload
             if(state.selectedCategories.length===0){
                state.selectedCategories=initialState.selectedCategories
            }
            console.log(action.payload)
    },
    resetFilter:(state,action)=>{
            state.priceMin=initialState.priceMin
            state.priceMax=initialState.priceMax
            state.selectedCategories=initialState.selectedCategories
    }

        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.category=action.payload
        })
    }

})
export const filtering=Filtering.reducer
export const{setPrice,set_categories,resetFilter}=Filtering.actions


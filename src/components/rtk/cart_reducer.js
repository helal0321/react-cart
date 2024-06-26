import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


/*************<Functions>***************/
const findProduct=(state,productId)=>{
       let product=state.find((e)=>e.id===productId)
       return product
}


const addProduct=(state,Product,id,increasedAmount)=>{
        let product=findProduct(state,id)
        if(product){
            product.amount+=increasedAmount
        }
        else{
            let data={...Product,amount:increasedAmount}
            state.push(data) 
        }
}
/*************</Functions>***************/
const cart=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddToCart:(state,action)=>{

                addProduct(state,action.payload,action.payload.id,1)
                
        },
        
        clearCart:(state,action)=>{
            return[]
        },
        increaseAmount:(state,action)=>{
                let product=findProduct(state,action.payload.id)
                if(product){
                    product.amount+=1
                }
        },
        decreaseAmount:(state,action)=>{
            let product=findProduct(state,action.payload.id)
            if(product){
                product.amount-=1
            }
    },

    removeProduct:(state,action)=>{
        const productId=action.payload.id
        return state.filter((e)=>e.id!==productId)
    },
    updateAmount:(state,action)=>{

            addProduct(state,action.payload.product,action.payload.product.id,action.payload.amount)
    }

    }
})

export const {AddToCart,clearCart,increaseAmount,decreaseAmount,removeProduct,updateAmount}=cart.actions
export const cartReducer=cart.reducer
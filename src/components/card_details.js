import avatar from '../avatar-03.jpg'
import './css/product_details.css'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { updateAmount } from './rtk/cart_reducer'
import { useState,useEffect } from 'react'

function CardDetails(){

    const handlebutton=(value)=>{
            if(value==='+'){
                setamount(amount+1)
            }
            else{
                if(amount>1){
                    setamount(amount-1)
                }
               
            }
    }

    const handleDispatch=()=>{
        dispatch(updateAmount({product:product,amount:amount}))
    }
    let productId=useParams().productId
    const dispatch=useDispatch()
    let [product,setproduct]=useState({})
    let [amount,setamount]=useState(1)

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${productId}`).then((res)=>{
            return res.json()
        }).then((res)=>{
            setproduct(res)
        })
    

    },[])

    
    return(
        <div className="product_details">
            <div className='container'>
            <img src={product.image} />
            <div className='box_content'>
                <p>Category: {product.category}</p>
                <h1>{product.title}</h1>
                <p>$ {product.price}</p>
                <p>{product.description}</p>

                <p>quantity</p>
                <div className='counter'>
                    <div className='buttons'>
                    <button onClick={()=>{handlebutton('+')}}>+</button>
                    <span>{amount}</span>
                    <button onClick={()=>{handlebutton('-')}}>-</button>
                    </div>
                    <p>total: {product.price*amount} $</p>

                </div>
                <button onClick={()=>{
                     handleDispatch()
                }}>add to cart</button>
            </div>
            </div>

        </div>
    )
}
export default CardDetails
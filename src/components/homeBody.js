import './css/homeBody.css'
import Card from './card'
import { fetchProducts } from './rtk/product_reducer'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
import { resetFilter } from './rtk/priceReducer'


function HomeBody(){
    const HandleSearch=(e)=>{
        setsearchValue(e.target.value)
    }

    let [searchValue,setsearchValue]=useState("")
    let [filteredProducts,setFilteredProducts]=useState([])
    const dispatch=useDispatch()
    const products=useSelector((state)=>{return state.Products})
 
    const price=useSelector((state)=>{return state.Filter})
    let selectedcategories=useSelector((state)=>{return state.Filter.selectedCategories})

    useEffect(()=>{
        dispatch(fetchProducts())
        return ()=>{
            dispatch(resetFilter())
        }
    },[])
    useEffect(()=>{
        setFilteredProducts(products.items.filter((product)=>{

            if(product.title.toLowerCase().includes(searchValue.toLowerCase()) && product.price>=price.priceMin && product.price<=price.priceMax &&(selectedcategories.includes(product.category) || selectedcategories.includes("all")) ){
                return product
            }
            else{
                return false
            }
        
}))
    },[selectedcategories,price,searchValue])

    const productsCard=filteredProducts.map((product)=>{
            return(<Card product={product} />)
    })
    
    return(
            <div className="homeBody">
                <input type='text' placeholder='search' onChange={(e)=>{
                    HandleSearch(e)
                }} />
                <div className='products_container'>
                    
                            {(products.loading) ? (<h1>loading</h1>) :productsCard}
                            
                </div>
                
            </div>
    )
}
export default HomeBody
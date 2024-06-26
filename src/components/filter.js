import './css/filter.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setPrice } from './rtk/priceReducer'
import { fetchCategories } from './rtk/priceReducer'
import { set_categories } from './rtk/priceReducer'
import { resetFilter } from './rtk/priceReducer'
function Filter(){

    const handleCategory=(e)=>{
        const value=e.target.value
        if(e.target.checked){
            setSelectedcategory([...selectedCategories,value])
        } 

        else{
            setSelectedcategory(selectedCategories.filter((item)=>{
                return item!=value
            }))

            }
    }

    const handlePriceValue=(e,value)=>{
            if(value==='max'){
                setmaxprice(+e.target.value)
            }
            else{
                setminprice(+e.target.value)
            }
    }
    const filterPrice=(e)=>{
        e.preventDefault()
        dispatch(setPrice({min:minprice,max:maxprice}))
        
    }
    const filterCategory=(e)=>{
        e.preventDefault()
        dispatch(set_categories(selectedCategories))
        
    }

    const handleReset=()=>{
        dispatch(resetFilter())

    }


    let [minprice,setminprice]=useState()
    let[maxprice,setmaxprice]=useState()
    let dispatch=useDispatch()
    let categories=useSelector((state)=>{return state.Filter.category})
    let [selectedCategories,setSelectedcategory]=useState([])
    let categoriesComponent=categories.map((category)=>{
        return(<li>
                  <input type="checkbox" id={`${category}`} value={category} onChange={(e)=>{
                        handleCategory(e)
                    }
                   
                } />
                  <label for={`${category}`}>{category}</label>
              </li>)
    })

    useEffect(()=>{
            dispatch(fetchCategories())
    },[])

    
    return(
        <div className="filter">
            <div className="box category">
                <h1>categories</h1>
                <form className="filters" onSubmit={(e)=>{
                       filterCategory(e)

                }}>
                    <ul>
                           <li>
                           <input type="checkbox" id='all'   onChange={(e)=>{
                                handleCategory(e)
                       
                    }
                   
                }
                   />
                            <label for="all">all</label>
                            </li> 
                            {categoriesComponent}

                    </ul>

                    <input type="submit" value="filter"/>
                </form>
                </div>
                <div className="box setPrice">
                    <h1>set price</h1>
                     <form className="setprice" onSubmit={(e)=>{
                            filterPrice(e)
                        
                     }}>
                        <div className="row">
                            <input type="number" placeholder="min" value={minprice} onChange={(e)=>{
                                handlePriceValue(e,'min')
                            }}/>
                            <input type="number" placeholder="max" value={maxprice} onChange={(e)=>{
                                handlePriceValue(e,'max')
                            }}/>

                        </div>
                        <input type="submit" value="set price" />

                    </form>
                    <button onClick={()=>{
                           handleReset()
                    } } className='reset'>reset filter</button>
                </div>
            </div>
        
        
    )
}
export default Filter
import avatar from '../avatar-03.jpg'
import './css/cart.css'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart } from './rtk/cart_reducer'
import { clearCart } from './rtk/cart_reducer'
import { increaseAmount,decreaseAmount } from './rtk/cart_reducer'
import { removeProduct } from './rtk/cart_reducer'
import { setPrice } from './rtk/priceReducer'
function Cart(){

    const HandleAmount=(data,value)=>{
        if(value==='increase'){
            dispatch(increaseAmount(data))
        }
        else{
            dispatch(decreaseAmount(data))
        }
    }

    const handleDelete=(data)=>{
        dispatch(removeProduct(data))
    }

    const HandleClear=()=>{
        dispatch(clearCart())
    }

    const HandleTotalPrice=()=>{
        let total=0
        cartData.forEach((product) => {
            total+=product.amount*product.price
        });
        return total
    }
    
    const dispatch=useDispatch()
    const cartData=useSelector((state)=>{return state.Cart})


    const tableData=cartData.map((data)=>{
        return(
            <tr>
            <td><img src={data.image}/></td>
            <td><p>{data.title}</p></td>
            <td>{`${data.description.slice(0,50)}...`}</td>
            <td>{data.category}</td>
            <td>${data.price}</td>
            <td className='buttons'><button onClick={()=>{
                        HandleAmount(data,'increase')
            }}>+</button>
            <span>{data.amount}</span>
            <button onClick={()=>{
                HandleAmount(data,'decrease')
            }}>-</button>
            </td>
            <td><button onClick={()=>{
               handleDelete(data)
            }}><p>+</p></button>
            {data.amount===0 && dispatch(removeProduct(data))}
            </td>


        </tr>
        )
    })

    return(
        <div className="cart">
            <div className='container'>
            <h1>my shopping cart</h1>
            <div className='row'>
            <button onClick={()=>{
                HandleClear()
            }}>clear</button>
            <p>total: {HandleTotalPrice()}$</p>
            </div>
            
            <table>
                <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>description</th>
                    <th>category</th>
                    <th>price</th>
                    <th>amount</th>
                    <th>remove</th>
                </tr>
                {tableData}
 
            </table>
            </div>
        </div>
    )
}
export default Cart
import './css/card.css'
import avatar from '../avatar-03.jpg'
import { Link } from 'react-router-dom'
import { AddToCart } from './rtk/cart_reducer'
import { useDispatch,useSelector } from 'react-redux'
function Card(props){

    const handleTitle=()=>{
        const title=props.product.title.slice(0,20)
        if(props.product.title.length===title.length){
            return title
        }
        else{
            return `${title}...`
        }
    }

    const handleDispatch=()=>{
        dispatch(AddToCart(props.product))
    }
    const dispatch=useDispatch()
    
    return(

            <div className="card">
                <img src={props.product.image} />
                <div className="cardBox">
                        <Link to={`/card_details/${props.product.id}`}><p>{handleTitle()}</p></Link>
                        <div className="row">
                            <p><span>price</span>$ {props.product.price}</p>
                            
                            <button onClick={()=>{
                                    handleDispatch()
                            }}>add</button>
                        </div>
                </div>
            </div>
    )
}
export default Card
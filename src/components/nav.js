import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import './css/nav.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Nav(){
    const cartNumbers=useSelector((state)=>{return state.Cart.length})
    let cartNumber_element=null
    if(cartNumbers>0){
        cartNumber_element=(<span>{cartNumbers}</span>)
    }
    return(
        <div className="nav">
            <div className='container'>
            <div className="logo"><Link to='/'> el<span>-hana</span></Link></div>
            
            <ul className="links">
                <li><Link to='/cart'><FontAwesomeIcon icon={faCartShopping} />{cartNumber_element} </Link></li>
                <li><FontAwesomeIcon icon={faUser} /></li>
            </ul>
            </div>

        </div>
    )
}
export default Nav
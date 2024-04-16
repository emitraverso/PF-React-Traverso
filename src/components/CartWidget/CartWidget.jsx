import CartIcon from "../CartIcon/CartIcon.jsx";
import {useState} from "react";
import './CartWidget.css'

function CartWidget(){
    const [cartItems,setCartItems] = useState(2);
        return(
            <div className="cart-widget">
                <CartIcon ancho={35} alto={35}/>
                <a href=""><span>{cartItems}</span></a>
            </div>
        ); 
}
    
export default CartWidget;

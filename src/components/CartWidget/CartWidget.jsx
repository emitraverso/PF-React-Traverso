import CartIcon from "../CartIcon/CartIcon.jsx"
import './CartWidget.css'
import { Link } from 'react-router-dom';

function CartWidget({ numero }) {

    return (
        <Link to={`/carrito`}>
            <div className="cart-widget">
                <CartIcon ancho={35} alto={35} />
                <a href=""><span>{numero}</span></a>
            </div>
        </Link>
    );
}

export default CartWidget;

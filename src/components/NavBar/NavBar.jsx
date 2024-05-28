import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import './NavBar.css'
import CartContext from "../../contexts/CartContext";

function NavBar() {

    const { carrito } = useContext(CartContext);
    const cantidadCarrito = carrito.reduce((acumulador,servicio) => acumulador+servicio.cantidad,0);

    return (
        <div className="nav-bar">
            <CategoryList />
            <div>
                {carrito.length !== 0 && <CartWidget numero={cantidadCarrito}/>}
            </div>

        </div>
    );
}

export default NavBar;
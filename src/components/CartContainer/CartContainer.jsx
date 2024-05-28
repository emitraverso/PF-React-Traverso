import { useContext } from 'react';
import './CartContainer.css'
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartDetail from './CartDetail';


export default function CartContainer() {

    const { carrito, limpiarCarrito, totalCarrito } = useContext(CartContext);

    return (
        <div className="carrito">
            <h1 className="titulo">Servicios Seleccionados: </h1>
            <CartDetail carrito={carrito} totalCarrito={totalCarrito} mostrarBotones={true} />


            <button className={(carrito.length === 0) ? "hidden" : "limpiar"} onClick={limpiarCarrito}> Limpiar </button>
            <Link className={(carrito.length === 0) ? "hidden" : "contratar"} to="/checkout"> Contratar </Link>
        </div>
    );
};
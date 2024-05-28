import { useContext } from 'react';
import './CartItem.css'
import CartContext from '../../contexts/CartContext';

export default function CartItem({ item, mostrarBotones }) {
    const { quitarDelCarrito, agregarAlCarrito } = useContext(CartContext);

    return (
        <div key={item} className="servicio-carrito">


            <img className="img" src={item.image} alt={item.title} />

            <div className="servicio-info">
                <p>{item.title}</p>
                <p>Cantidad Meses: {item.cantidad}</p>
                <p>Precio: ${item.price}</p>
            </div>

            {mostrarBotones && (
                <div className="botones-carrito">
                    <button className='btn' onClick={() => quitarDelCarrito(item, 1)}>-</button>
                    <button className='btn' onClick={() => agregarAlCarrito(item, 1)}>+</button>
                </div>
            )}
        </div>
    );
}
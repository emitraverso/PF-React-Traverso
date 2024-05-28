import './CartContainer.css'
import CartItem from "../CartItem/CartItem";

export default function CartDetail({ carrito, totalCarrito, mostrarBotones }) {
    return (
        <div>

            <div className='carrito-servicios'>
                {carrito.length === 0 ? (
                    <h2 className='mensaje'>No hay servicios agregados.</h2>
                ) : (
                    carrito.map((servicio) => {
                        return <CartItem key={servicio.id} item={servicio} mostrarBotones={mostrarBotones} />;
                    })
                )}
            </div>
            <h3 className={(carrito.length === 0) ? "hidden" : "carrito-precio"}>Total: ${totalCarrito}</h3>
        </div>
    );
}
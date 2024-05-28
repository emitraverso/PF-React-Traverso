import { useContext,  useState } from 'react';
import CartContext from '../../contexts/CartContext';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './CheckoutContainer.css';
import useCliente from '../../Hooks/useCliente';
import CartDetail from '../CartContainer/CartDetail';

export default function CheckoutContainer() {

    const { carrito, limpiarCarrito, totalCarrito } = useContext(CartContext);

    const { cliente, handleInputChange } = useCliente();

    const [idOrden, setIdOrden] = useState("");

    const [ordenEnviada, setOrdenEnviada] = useState(false);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = { cliente, carrito, totalCarrito };
        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");

        addDoc(ordenesCollection, orden).then(({ id }) => {
            setIdOrden(id);
            limpiarCarrito();
            setOrdenEnviada(true);
        });

    }

    return (

        <div className="seccion-formulario">
            {ordenEnviada ? (
                <h2 className='mensaje'>Gracias por elegirnos! Se generó su orden con el número: {idOrden}</h2>    
                 
            ) : (
                carrito.length !== 0 && (
                    <div >
                        <form onSubmit={handleSubmit} className="form-registro" >
                            <div className="campo-registro">
                                <label className="label">Nombre</label>
                                <input type="text" placeholder="Juan Perez" className="campo-input" name='nombre' value={cliente.nombre} onChange={handleInputChange} />
                            </div>
                            <div className="campo-registro">
                                <label className="label">Telefono</label>
                                <input type="telephone" placeholder="11787878" className="campo-input" name='telefono' value={cliente.telefono} onChange={handleInputChange} />
                            </div>
                            <div className="campo-registro">
                                <label className="label">Email</label>
                                <input type="email" placeholder="juan.perez@mail.com" className="campo-input" name='email' value={cliente.email} onChange={handleInputChange} />
                            </div>

                            <CartDetail carrito={carrito} totalCarrito={totalCarrito} mostrarBotones={false} />
                            <button className="btn-formulario" type="submit" >
                                Contratar
                            </button>
                        </form>
                    </div>)
            )}
            
        </div>
    )
};



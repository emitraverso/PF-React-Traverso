import { useEffect, useState } from "react";
import CartContext from "./CartContext";


export default function CartProvider({ children }) {

    const [carrito, setCarrito] = useState(localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }

        const nuevoCarrito = [...carrito];
        const itemExistente = nuevoCarrito.find((servicio) => servicio.id == itemAgregado.id)

        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }, [carrito]);
      

    const quitarDelCarrito = (item, cantidad) => {
        let nuevoCarrito = [...carrito];
        const itemExistente = nuevoCarrito.find((servicio) => servicio.id == item.id)
        itemExistente.cantidad -= cantidad;
        nuevoCarrito = nuevoCarrito.filter(servicio => servicio.cantidad > 0);
        setCarrito(nuevoCarrito);
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    const totalCarrito = carrito.reduce((ac, servicio) => { return ac + servicio.price * servicio.cantidad }, 0)



    return (
        <CartContext.Provider
            value={{ carrito, agregarAlCarrito, quitarDelCarrito, limpiarCarrito, totalCarrito }}
        >
            {children}
        </CartContext.Provider>
    );



};
import { useState } from 'react';

export default function useContador(valorInicial=0) {
    const[cantidad, setCantidad] = useState(valorInicial)
    const sumar = () => {
        setCantidad(cantidad + 1)
    }
    const restar = () => {
        if (cantidad === 0){
            return;
        }
        setCantidad(cantidad - 1)
    }

    const resetear = () => {
        setCantidad(valorInicial);
    }

    return {cantidad,sumar,restar,resetear}

}
import { useState, useEffect } from 'react';
import { getServicios, getServiciosByCategoria } from '../Mock/asyncMock';

export default function useServicios(categoria) {

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        if (categoria) {
            setTitulo(categoria)
            getServiciosByCategoria(categoria)
                .then((data) => setServicios(data))
                .finally(() => setLoading(false))
        } else {
            setTitulo("")
            getServicios()
                .then((data) => setServicios(data))
                .finally(() => setLoading(false))
        }
    }, [categoria])

    return { servicios, loading, titulo }

}
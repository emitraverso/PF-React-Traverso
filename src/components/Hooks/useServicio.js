import { useState, useEffect } from 'react';
import { getServicioById } from '../Mock/asyncMock';

export default function useServicio(id) {
    const [servicio, setServicio] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getServicioById(id)
            .then((data) => setServicio(data))
            .finally(() => setLoading(false))
    })
    return {servicio,loading}

}
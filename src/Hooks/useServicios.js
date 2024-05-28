import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function useServicios(categoria) {

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        const db = getFirestore();
        const serviciosCollection = collection(db, "servicios");

        if (categoria) {
            setTitulo(categoria)
            const serviciosQuery = query(serviciosCollection, where("categoria", "==", categoria));
            getDocs(serviciosQuery)
                .then((snapshot) => {
                    setServicios(
                        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                })
                .finally(() => setLoading(false));
        } else {
            setTitulo("")
            getDocs(serviciosCollection)
                .then((snapshot) => {
                    setServicios(
                        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                })
                .finally(() => setLoading(false));
        }

    }, [categoria]);

    return { servicios, loading, titulo }

}
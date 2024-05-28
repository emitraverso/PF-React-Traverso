import { useState, useEffect } from 'react';
import { getDoc, getFirestore, doc} from "firebase/firestore";

export default function useServicio(id) {
    const [servicio, setServicio] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const servicioById = doc(db, "servicios", id);
        getDoc(servicioById)
            .then((doc) => { 
                if (doc.exists()) {
                    setServicio({ id: doc.id, ...doc.data() });
                } 
            })
            .finally(() => setLoading(false));
    }, [id]);


return { servicio, loading }

}
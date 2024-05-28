import './ItemDetailContainer.css'
import ItemDetail from '../Item/ItemDetail';
import useServicio from '../../Hooks/useServicio';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const {id} = useParams();
    const { servicio, loading } = useServicio(id);

    if (loading) {
        return <h1 className='cargando'> Cargando ...</h1>
    }

    if(!servicio){
        return <h1 className='cargando'>Producto no encontrado :(</h1>
    }

    return (
        <div>
            <ItemDetail item={servicio} />
        </div>
    )
}


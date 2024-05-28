import './ItemListContainer.css'
import ItemList from '../Item/ItemList';
import useServicios from '../../Hooks/useServicios';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {

  const { categoria } = useParams();

  const { servicios, loading, titulo } = useServicios(categoria);

  if (loading) {
    return <h1 className='cargando'> Cargando ...</h1>
  }

  return (
    <div>
      <h1 className="titulo">{greeting} {titulo.toUpperCase()}</h1>
      <ItemList servicios={servicios} />

    </div>
  )
}


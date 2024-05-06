import { Link } from 'react-router-dom';
import useContador from '../Hooks/useContador';
import './Item.css'

export default function Item({item}){
    const { cantidad, sumar, restar } = useContador(0);
    
    return (
        
        <div className='servicio'>
            <div className='img-container'>
                <img className='servicio-img' src={item.image} alt="img item" />
            </div>
            
            <h2 className='servicio-titulo'>{item.title}</h2>
            {/* <p className='servicio-descripcion'>{item.description}</p> */}
            <p className='servicio-precio'>Precio: ${item.price} /mes</p>
            
            <Link className="ver-mas" to={`/item/${item.id}`}>Ver más</Link>
            
        </div>
        
    )
    
    }
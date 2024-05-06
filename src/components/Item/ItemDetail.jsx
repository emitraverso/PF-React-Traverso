import useContador from '../Hooks/useContador';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

export default function Item({ item }) {
    const { cantidad, sumar, restar } = useContador(0);

    return (

        <div className='servicio-detalle'>
            <div className='img-container'>
                <img className='servicio-img' src={item.image} alt="img item" />
            </div>
            <div className='img-container'></div>
            <div className='servicio-info'>
                <h2 className='servicio-titulo'>{item.title}</h2>
                <p className='servicio-descripcion'>{item.description}</p>
                <p className='servicio-precio'>${item.price} /mes</p>
                <p className='servicio-descripcion'>Tiempo de contratación (1 a 12 meses):</p>
                

                <div className='contador-container'>
                
                    <ItemCount maximo={item.stock} cantidad={cantidad} sumar={sumar} restar={restar} />
                </div>
                <div className='agregar-container'>
                    <button className='agregar-btn' onClick={() => onAdd(item, contador)}>
                        Agregar
                    </button>
                </div>
            </div>
        </div>

    )

}
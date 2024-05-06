import Item from "./Item";
import './Item.css'


export default function ItemList( {servicios}){

     return (
        <div className="list-container">
            {servicios.map((servicio)=> (
            <Item key={servicio.id} item={servicio} />
        ))
        }
        </div>
        
     )
     
}
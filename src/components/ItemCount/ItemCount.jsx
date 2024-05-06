
import './ItemCount.css'

function ItemCount({maximo,cantidad,sumar,restar}) {

    return(
      <div className='contador-container'>
        <button className='contador-btn' onClick={restar} disabled={cantidad==0}>-</button>
        <span className='numero'>{cantidad}</span>
        <button className='contador-btn' onClick={sumar} disabled={cantidad>=maximo}>+</button>
      </div>
    ) 
  }
  
  export default ItemCount;


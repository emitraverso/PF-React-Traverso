import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    return(
      <div>
        <h1 className="titulo">{greeting}</h1>
      </div>
    ) 
  }
  
  export default ItemListContainer;
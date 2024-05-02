import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid" alt={item.producto} />
                </div>
                <div className="col-md-4">
                    <h2>Nombre: {item.producto}</h2>
                    <p>Precio: ${item.precio}</p>
                    <p>{item.detalle}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
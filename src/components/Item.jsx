import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
            <div className="card">
                <img src={item.imagen} className="img-fluid" alt={item.producto} />
                    <div className="card-body">
                        <h5 className="card-title">{item.producto}</h5>
                    </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${item.precio}</li>
                    <li className="list-group-item">Categoria: {item.categoria}</li>
                </ul>
            </div>
            </Link>
        </div>
    )
}

export default Item
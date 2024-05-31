import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import papelera from "../assets/img/trash.svg"

const Cart = () => {
    
    const {carrito, removeItem, clear, contarProductos, calcularCostoProductos } = useContext(CartContext)
    
    if (contarProductos() == 0) {

        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-info" role="alert">
                             <h2>Tu carrito esta vacio. Vuelve a la tienda para agregar productos!</h2>
                             <Link to={"/"} className="btn btn-primary">Volver a la tienda</Link>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                               <td colSpan={6} className="text-end"><button className="btn btn-primary" onClick={clear}>Vaciar carrito completo</button></td> 
                            </tr>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.producto} width={80} /></td>
                                    <td className="align-middle text-center">{item.producto}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">Cantidad:{item.quantity}</td>
                                    <td className="align-middle text-end"><img src={papelera} width={30} onClick={() => {removeItem(item.id)}}/></td>
                                </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}><b>Total</b></td>
                                    <td className="text-center"><b>${calcularCostoProductos()}</b></td>
                                    <td>&nbsp;</td>
                                    <td className="text-end"><Link to={"/checkout"} className="btn btn-primary">Chekout</Link></td>
                                </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Cart
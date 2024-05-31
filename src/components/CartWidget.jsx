import { Link } from "react-router-dom"
import bag from "../assets/img/bag.svg"
import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const CartWidget = () => {

    const {contarProductos} = useContext(CartContext)

    
    if (contarProductos() > 0){
        return (
            <div>
                <Link to={"/cart"} className="btn btn-outline-primary position-relative">
                    <img src={bag} alt="carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{contarProductos()}</span>
                </Link>
            </div>
        )
    }    

}

export default CartWidget
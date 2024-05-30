import { Link } from "react-router-dom"
import bag from "../assets/img/bag.svg"

const CartWidget = () => {
    return (
        <div>
            <Link to={"/cart"} className="btn btn-outline-primary position-relative">
                <img src={bag} alt="carrito" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">1
                </span>
            </Link>
        </div>
    )
}

export default CartWidget
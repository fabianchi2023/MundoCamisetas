import bag from "../assets/img/bag.svg"

const CartWidget = () => {
    return (
        <div>
            <button type="button" class="btn btn-outline-primary position-relative">
                <img src={bag} alt="carrito" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1
                </span>
            </button>
        </div>
    )
}

export default CartWidget
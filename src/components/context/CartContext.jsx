import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let produ = carrito.find(prod => prod.id === item.id)
            produ.quantity += quantity
            setCarrito([...carrito])

        } else {
            setCarrito([...carrito, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const items = carrito.filter( item => item.id != id)
        setCarrito([...items])
    }

    const clear = () => {

        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(item => item.id === id)
    }

    const contarProductos = () => {
        return carrito.reduce((acumulador, item) => acumulador += item.quantity, 0)
    }

    const calcularCostoProductos = () => {
        return carrito.reduce((acumulador, item) => acumulador += item.quantity * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{carrito, addItem, removeItem, clear, contarProductos, calcularCostoProductos}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider
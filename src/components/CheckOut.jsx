import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckOut = () => {

    const {carrito,contarProductos, calcularCostoProductos, clear} =useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [idCompra, setIdCompra] = useState("")

    
    const generarPedido = () => {

        if(nombre == ""){
            return false
        } else if(email == "") {
            return false
        } else if (telefono == ""){
            return false
        }

        const buyer = {nombreCampo: nombre, emailCampo: email, telefonoCampo: telefono}
        const items = carrito.map (item => ({id:item.id, title:item.producto, price: item.precio, quantity:item.quantity}))
        const orden = {buyer:buyer, items:items, total: calcularCostoProductos()}
        const db = getFirestore()
        const ordersCollection = collection(db, "Ordenes")
         addDoc(ordersCollection, orden).then(data => {
            setIdCompra(data.id)
            setNombre("")
            setEmail("")
            setTelefono("")
            clear()
         })

    }

    if (contarProductos() == 0 && !idCompra) {

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
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarPedido}>Generar pedido</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {carrito.map(producto =>(
                            <tr key={producto.id}>
                                <td><img src={producto.imagen} alt={producto.producto} width={80} /></td>
                                <td className="align-middle text-center">{producto.producto}</td>
                                <td className="align-middle text-center">Cantidad: {producto.quantity}</td>
                                <td className="align-middle text-center">${producto.precio}</td>
                            </tr>
                           ))} 
                           <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${calcularCostoProductos()}</b></td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col my-3">
                    {idCompra ? <div className="alert alert-primary text-center" role="alert">
                    Felicidades, has realizado tu compra. El ID es: " + {idCompra}</div>  : ""}
                </div>
                
            </div>
        </div>
    )
}

export default CheckOut
import { useEffect, useState } from "react";
import arrayProductos from "./productos.json"
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const CheckOut = () => {

    const [carrito, setCarrito] = useState ([])
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [idCompra, setIdCompra] = useState("")

    

    useEffect (() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "Productos")
        getDocs(itemsCollection).then(elementos => {
            if (elementos.size > 0){
                setCarrito(elementos.docs.map(item => ({id:item.id, ...item.data()})))
            }
        })
    }, [])

    const calcularTotal = () => {

        return carrito.reduce((acumulador, producto) => acumulador += producto.precio, 0)

    }

    const generarPedido = () => {
        const buyer = {nombreCampo: nombre, emailCampo: email, telefonoCampo: telefono}
        const items = carrito.map (item => ({id:item.id, title:item.producto, price: item.precio}))
        const orden = {buyer:buyer, items:items, total: calcularTotal()}
        const db = getFirestore()
         const ordersCollection = collection(db, "Ordenes")
         addDoc(ordersCollection, orden).then(data => {
             setIdCompra(data.id)
         })

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
                                <td>{producto.producto}</td>
                                <td>${producto.precio}</td>
                            </tr>
                           ))} 
                           <tr>
                                <td colSpan={2}>Total</td>
                                <td className="text-end">${calcularTotal()}</td>
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
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const ItemCount = ({stock, onAdd}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const [stockTotal, setStockTotal] = useState(stock)
    const [visualizar, setVisualizar] = useState(true)

    const quitar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad-1)
        }
    }

    const agregar = () => {
        if (cantidad < stockTotal) {
            setCantidad (cantidad+1)
        }
    }

    const agregarAlCarrito = () => {
        if (cantidad <= stockTotal){
            setStockTotal (stockTotal - cantidad)
            onAdd(cantidad)
            setCantidad(1)
            setVisualizar(false)
        }
    }

    useEffect (() => {
        setStockTotal(stock);
    }, [stock])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={quitar}> - </button>
                        <button type="button" className="btn btn-primary"> {cantidad} </button>
                        <button type="button" className="btn btn-primary" onClick={agregar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {visualizar ? 
                    
                    <button type="button" className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</button> : 
                    
                    <Link to= {"/cart"}type="button" className="btn btn-primary">Finalizar compra</Link> }

                </div>
            </div>
        </div>
    )
}

export default ItemCount
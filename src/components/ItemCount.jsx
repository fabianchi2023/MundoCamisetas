import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    
    const [cantidad, setCantidad] = useState(0)
    const [stockTotal, setStockTotal] = useState(stock)

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

    const onAdd = () => {
        if (cantidad <= stockTotal){
            setStockTotal (stockTotal - cantidad)
            console.log("agregaste " + cantidad + " productos al carrito");
            setCantidad(0)
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
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
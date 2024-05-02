import { useState } from "react"


const ItemCount = ({stock}) => {
    
    const [contador, setContador] = useState(0)
    const [stockTotal, setStockTotal] = useState(stock)

    const quitar = () => {
        if (contador > 1) {
            setContador (contador-1)
        }
    }

    const agregar = () => {
        if (contador < stockTotal) {
            setContador (contador+1)
        }
    }

    const onAdd = () => {
        if (contador <= stockTotal){
            setStockTotal (stockTotal - contador)
            console.log("agregaste " + contador + " productos al carrito");
            setContador(0)
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={quitar}> - </button>
                        <button type="button" className="btn btn-primary"> {contador} </button>
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
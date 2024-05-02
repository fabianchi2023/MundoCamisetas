import { useEffect, useState } from "react"
import arrayProductos from "./productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams

    useEffect (() => {
        const promesa = new Promise (res => {
            setTimeout(() => {
                const producto = arrayProductos.find (item => item.id == id)
                res (producto)
            }, 2000);
        })

        promesa.then (rta => {
            setItem(rta)
        })
    }, [id])


    return (
        <div className="container">
            <div className="row my-5">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
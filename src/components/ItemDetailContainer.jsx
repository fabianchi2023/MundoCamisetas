import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import arrayProductos from "./productos.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect (() => {
        const promesa = new Promise (res => {
            setTimeout(() => {
                const produ = arrayProductos.find (item => item.id == parseInt(id))
                res (produ)
            }, 1000);
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
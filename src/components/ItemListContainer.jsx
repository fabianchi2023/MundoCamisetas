import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import arrayProductos from "./productos.json"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {id} = useParams()


    useEffect (() => {
        const promesa = new Promise (res => {
            setTimeout(() => {
                res (id ? arrayProductos.filter(i => i.categoria == id) : arrayProductos)
            }, 2000);
        })

        promesa.then (rta => {
            setProductos(rta)
        })
    }, [id])


    return (
        <div className="container">
            <div className="row my-1">
                <h1 className="text-center my-4 text-primary">Bienvenidos al mundo de las camisetas</h1>
                <ItemList items={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer
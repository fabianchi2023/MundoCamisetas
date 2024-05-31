import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loading from "./Loading"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    const [visible, setVisible] = useState(true)

     useEffect (() => {
        const conexionALaBase = getFirestore()
        const productosCollection = collection(conexionALaBase, "Productos")
        const queryCollection = id ? query(productosCollection, where("categoria", "==", id)): productosCollection   
        getDocs(queryCollection).then(elemento => {
            if (elemento.size > 0){
                setProductos(elemento.docs.map(item => ({id:item.id, ...item.data()})))
                setVisible(false)
            }
        })
     },[id])


    return (
        <div className="container">
            <div className="row my-1">
                <h1 className="text-center my-4 text-primary">Bienvenidos al mundo de las camisetas</h1>
                {visible ? <Loading /> : <ItemList items={productos} />}
            </div>
        </div>
    )
}

export default ItemListContainer
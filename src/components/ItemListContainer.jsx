import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import arrayProductos from "./productos.json"
import { useParams } from "react-router-dom"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"

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

     useEffect (() => {
         const conexionALaBase = getFirestore()
         const productoDoc = doc(conexionALaBase, "Productos","vbxYy7zuYLxFW6bDJl1U")
         getDoc(productoDoc).then(producto => {
             if (producto.exists()){
                 setProductos({id:producto.id, ...producto.data()})
             }
         })
     },[])

     useEffect (() => {
         const conexionALaBase = getFirestore()
         const productosCollection = collection(conexionALaBase, "Productos")
         getDocs(productosCollection).then(elementos => {
             if (elementos.size > 0){
                 setProductos(elementos.docs.map(item => ({id:item.id, ...item.data()})))
             }
            
         })
     },[])


    return (
        <div className="container">
            <div className="row my-1">
                <h1 className="text-center my-4 text-primary">Bienvenidos al mundo de las camisetas</h1>
                {<ItemList items={productos} />}
            </div>
        </div>
    )
}

export default ItemListContainer
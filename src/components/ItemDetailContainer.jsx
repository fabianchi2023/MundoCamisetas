import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "./Loading"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    const [visible, setVisible] = useState (true)

    useEffect (() => {
        const conexionALaBase = getFirestore()
        const documentoRef = doc(conexionALaBase, "Productos", id)
        getDoc(documentoRef).then(elemento => {
            if (elemento.exists()){
                setItem({id:elemento.id, ...elemento.data()})
                setVisible(false)
            }
        })
    }, [id])


    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> : <ItemDetail item={item}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer
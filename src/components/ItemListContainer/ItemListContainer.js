import {useEffect} from 'react'
import {useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import "./ItemListoContainer.css"
import Spinner from '../Spinner/Spinner'

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();


    useEffect(()=>{
        setLoading(true)


        const collectionRef =categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return { id: doc.id,...doc.data()}
            })
            setProducts(products)
        })
        .catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    },[categoryId])


    if(loading){
        return (
            <Spinner />
        )
    }


    if(products.length === 0){
        return (
            <div>
                <h1>No hay productos</h1>
            </div>
        
        )
    }

    return(
       <div>
            <h1>Catalogo de productos</h1>
            <ItemList products={products}/> 
       </div>
    )
}

export default ItemListContainer;
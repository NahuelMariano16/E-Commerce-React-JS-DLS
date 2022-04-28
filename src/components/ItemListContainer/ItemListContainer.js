import {useEffect} from 'react'
import {useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import "./ItemListoContainer.css"

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();


    useEffect(()=>{
        const collectionRef =categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return { id: doc.id,...doc.data()}
            })
            setProducts(products)
        })
    },[categoryId])

    if(products.length === 0){
        return <h1>No hay productos</h1>
    }

    return(
       <div>
            <h1>{props.greetings}</h1>
            <ItemList products={products}/> 
            :
            <div>
            <div className='SpinnerCont'> <div className='Spinner'></div></div>
            </div>
       </div>
    )
}

export default ItemListContainer;
import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'
import '../Spinner/Spinner'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer =(setCart,cart) =>{
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const {productId} = useParams();
    

    useEffect(()=>{
        setLoading(true)

        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            console.log(response)
            const product = {id: response.id , ...response.data()}
            setProduct(product)
        })
        .catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })


    },[productId])

    if(loading){
        return (
            <Spinner />
        )
    }

    return(
        <div className='ItemDetailContainer'>
            {
                loading?
                    <Spinner />
                    :
                product?
                    <ItemDetail {...product} setCart={setCart} cart={cart}/>:
                    <div>
                        <h2>El producto no existe</h2>
                    </div>
            }
        </div>
    )
}
export default ItemDetailContainer
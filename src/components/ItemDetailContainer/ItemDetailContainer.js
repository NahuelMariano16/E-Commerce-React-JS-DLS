import {useEffect, useState} from 'react'
import {getProductsById} from '../dataBase'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer =(setCart,cart) =>{
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const {productId} = useParams();
    

    useEffect(()=>{
        // getProductsById(productId).then(item =>{
        //     setProduct(item)
        // }).catch(err => {
        //     console.log(err)
        // }).finally(()=>{
        //     setLoading(false)
        // })

        // return(()=>{
        //     setProduct()
        // })

        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            console.log(response)
            const product = {id: response.id , ...response.data()}
            setProduct(product)
        })


    },[productId])


    return(
        <div className='ItemDetailContainer'>
            {
                loading?
                    <div className='SpinnerCont'> <div className='Spinner'></div></div>
                    :
                product?
                    <ItemDetail {...product} setCart={setCart} cart={cart}/>:
                    <h2>El producto no existe</h2>
            }
        </div>
    )
}
export default ItemDetailContainer
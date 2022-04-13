import {useEffect, useState} from 'react'
import {getProductsById} from '../dataBase'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'


const ItemDetailContainer =() =>{
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();
    

    useEffect(()=>{
        getProductsById(productId).then(item =>{
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })

        return(()=>{
            setProduct()
        })
    },[productId])


    return(
        <div className='ItemDetailContainer'>
            {
                loading?
                    <h2>Cargando producto...</h2> :
                product?
                    <ItemDetail {...product} />:
                    <h2>El producto no existe</h2>
            }
        </div>
    )
}
export default ItemDetailContainer
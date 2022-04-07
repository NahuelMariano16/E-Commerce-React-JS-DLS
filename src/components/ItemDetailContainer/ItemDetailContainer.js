import {useEffect, useState} from 'react'
import {getProductsById} from '../dataBase'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer =() =>{
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        getProductsById(1).then(item =>{
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    })


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
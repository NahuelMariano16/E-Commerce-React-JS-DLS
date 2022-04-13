import {useEffect} from 'react'
import {useState} from 'react'
import {getProducts} from '../dataBase'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();


    useEffect(()=>{
        getProducts(categoryId).then(prods =>{
            setProducts(prods)
        }).catch(error =>{
            console.log(error)
        })
    },[categoryId])


    return(
       <div>
            <h1>{props.greetings}</h1>
            <ItemList products={products}/>
       </div>
    )
}

export default ItemListContainer;
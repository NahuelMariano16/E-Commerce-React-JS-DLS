import {useEffect} from 'react'
import {useState} from 'react'
import {getProducts} from '../dataBase'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(prods =>{
            setProducts(prods)
        })
    },[])


    return(
       <div>
            <h1>{props.greetings}</h1>
            <ItemList products={products}/>
       </div>
    )
}

export default ItemListContainer
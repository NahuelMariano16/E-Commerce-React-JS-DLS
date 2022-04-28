import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'

const Cart = () =>{
    const [loading, setLoading] = useState(false)

    const { cart, getTotal,clearCart, getQuantity } = useContext(CartContext)

  
    
    const createOrder = () =>{
        setLoading(true)
        const objOrder = {
            items: cart,
            buyer: {
                name: '',
                phone: '',
                email: '',
            },
            total: getTotal(),
            date: new Date()
    
        }
        const ids= cart.map(prod => prod.id)
        const batch = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb, 'products')
        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response =>{
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }

                })
            }).then(()=>{
                if(outOfStock.length === 0){
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                }else{
                    return Promise.reject({name: 'ouOfStockError', products: outOfStock})
                }
            }).then(({id})=>{
                batch.commit()
                console.log(`El id  de la orden en ${id}`)
            }).catch(error =>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
    }

    if(loading){
        return(
            <div>
                <h3>Se esta generando su orden</h3>
                <div className='SpinnerCont'> <div className='Spinner'></div></div>
            </div>
        )
    }

    if(getQuantity() === 0){
        return(
            <div>
                <h2 className='CartTitle0'>No hay producto en el carrito</h2>
                <Link to='/' className='CartTitleConditional'>Volver al inicio</Link>
            </div>
        )
    }


    return(
        
        <div className='CartContainer'>
            <h1 className='CartTitle'>Carrito</h1>
            <ItemCart />
            <button className='Btn' onClick={()=> createOrder()}>Finalizar compra</button>
            <button className='Btn' onClick={()=> clearCart()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
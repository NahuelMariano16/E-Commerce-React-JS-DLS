import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () =>{

    const { cart } = useContext(CartContext)
    
    if(cart.length === 0){
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
        </div>
    )
}

export default Cart
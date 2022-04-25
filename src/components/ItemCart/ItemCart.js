import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = () => {

    const { cart, removeItem, clearCart, finish } = useContext(CartContext)

    return (
        <div className='ItemCart'>
            <ul className='ItemDisplay'>
                {cart.map(prod =><li className='ItemCard' key={prod.id}>{prod.name} <br></br>
                    Cantidad:{prod.quantity}<br></br>
                    Precio por unidad:{prod.price} <br></br>
                    Subtotal de producto: {prod.quantity * prod.price} <br></br><br></br>
                    <button className='removeBtn' onClick={()=> removeItem(prod.id)}>Eliminar Producto</button>
                    <br></br>
                    </li>)}
            </ul>
            <span></span><hr></hr>
            <div className='btnContainer'>
                <button className='Btn' onClick={()=> finish()}>Finalizar compra</button>
                <button className='Btn' onClick={()=> clearCart()}>Vaciar carrito</button>
            </div>
        
        </div>
    )
}

export default ItemCart
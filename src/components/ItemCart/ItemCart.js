import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = () => {

    const { cart, removeItem, clearCart, finish, getTotal } = useContext(CartContext)

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
            <hr></hr>
            <div className='btnContainer'>
                <h3>Total: $ {getTotal()}</h3>
            </div>
        
        </div>
    )
}

export default ItemCart
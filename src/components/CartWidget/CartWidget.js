import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () =>{

    const { getQuantity} = useContext(CartContext)
    return(
        <div className="logoCont">
            <img src={'./images/logo.svg'} alt="Logo Shopcart" className="logoCart"/>
            { getQuantity() }
        </div>
    )
}

export default CartWidget
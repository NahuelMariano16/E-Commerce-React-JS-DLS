import './CartWidget.css'

const CartWidget = () =>{
    return(
        <div className="logoCont">
            <img src={'./images/cart.png'} alt="Logo Shopcart" className="logoCart"/>
            <p className="counter">0</p>
        </div>
    )
}

export default CartWidget
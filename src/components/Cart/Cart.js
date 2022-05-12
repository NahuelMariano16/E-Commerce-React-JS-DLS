import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./Cart.css";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { clearCart } = useContext(CartContext);

  return (
    <div className="CartContainer">
      <h1 className="CartTitle">Carrito</h1>
      <ItemCart />
      <Link to="/form" className="Btn">
        Generar Orden
      </Link>
      <button className="Btn" onClick={() => clearCart()}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;

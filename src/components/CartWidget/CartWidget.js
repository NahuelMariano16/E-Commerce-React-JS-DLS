import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <div className="logoCont">
      <Link to="/cart">
        <img
          src={"./images/logo.svg"}
          alt="Logo Shopcart"
          className="logoCart"
        />
      </Link>
      {getQuantity()}
    </div>
  );
};

export default CartWidget;

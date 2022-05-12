import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem, isInCart } = useContext(CartContext);
  const handleOnAdd = (count) => {
    setQuantity(count);

    const prouctObj = {
      id,
      name,
      price,
    };
    addItem({ ...prouctObj, quantity: count });
  };

  return (
    <div className="container">
      <h2>Item Detail</h2>
      <section className="Card">
        <header>
          <h3>{name}</h3>
        </header>
        <div>
          <img src={img} alt={name} className="Img" />
        </div>
        <section className="infoCont">
          <p className="info">Categria: {category}</p>
          <p className="info">Descripción: {description}</p>
          <p className="info">Precio: {price}</p>
        </section>
        <footer className="footer">
          {isInCart(id) ? (
            <Link to="/cart" className="cartLink">
              Generar Orden
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </section>
    </div>
  );
};

export default ItemDetail;

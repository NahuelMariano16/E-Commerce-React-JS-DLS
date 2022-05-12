import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count >= 2) {
      setCount((currCount) => currCount - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount((currCount) => currCount + 1);
    }
  };

  return (
    <div>
      <div className="counter">
        <div className="counterCont">
          <button onClick={decrement} className="btn">
            -
          </button>
          <p>{count}</p>
          <button onClick={increment} className="btn">
            +
          </button>
        </div>
        <button onClick={() => onAdd(count)}> Agregar al Carrito </button>
      </div>
    </div>
  );
};

export default ItemCount;

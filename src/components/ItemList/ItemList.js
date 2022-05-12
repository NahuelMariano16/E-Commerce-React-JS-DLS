import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="listGroup">
      {products.map((prods) => (
        <Item key={prods.id} {...prods} />
      ))}
    </div>
  );
};

export default ItemList;

import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = (setCart, cart) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    getDoc(doc(firestoreDb, "products", productId))
      .then((response) => {
        console.log(response);
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [productId]);

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="ItemDetailContainer">
      {product ? (
        <ItemDetail {...product} setCart={setCart} cart={cart} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
  );
};
export default ItemDetailContainer;

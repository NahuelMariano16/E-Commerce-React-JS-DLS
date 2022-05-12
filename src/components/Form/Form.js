import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import {
  getDocs,
  writeBatch,
  query,
  where,
  collection,
  documentId,
  addDoc,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [modal, setModal] = useState(false);

  const Finalizar = () => {
    let nombre = document.getElementById("nombre").value;
    let tel = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;
    let address = document.getElementById("address").value;

    if (nombre === "" || nombre === null) {
      alert("Ingrese su nombre");
      document.getElementById("nombre").focus();
    } else {
      if (tel === "" || tel === null) {
        alert("Ingrese su número de telefono");
        document.getElementById("tel").focus();
      } else {
        if (mail === "" || mail === null) {
          alert("Ingrese su e-mail");
          document.getElementById("mail").focus();
        } else {
          if (address === "" || address === null) {
            alert("Ingrese su direccion");
            document.getElementById("address").focus();
          } else {
            console.log("Validaciones correctas");
            const objOrder = {
              Productos: cart,
              Comprador: {
                Nombre: nombre,
                Telefono: tel,
                eMail: mail,
                Dirección: address,
              },
              total: getTotal(),
              date: new Date(),
            };
            const ids = cart.map((producto) => producto.id);
            const batch = writeBatch(firestoreDb);
            const collectionRef = collection(firestoreDb, "products");
            const outOfStock = [];

            getDocs(query(collectionRef, where(documentId(), "in", ids)))
              .then((response) => {
                response.docs.forEach((doc) => {
                  const dataDoc = doc.data();
                  const prodQuantity = cart.find(
                    (prod) => prod.id === doc.id
                  )?.quantity;

                  if (dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, {
                      stock: dataDoc.stock - prodQuantity,
                    });
                  } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                  }
                });
              })
              .then(() => {
                if (outOfStock.length === 0) {
                  const collectionRef = collection(firestoreDb, "orders");
                  return addDoc(collectionRef, objOrder);
                } else {
                  return Promise.reject({
                    name: "ouOfStockError",
                    products: outOfStock,
                  });
                }
              })
              .then(({ id }) => {
                batch.commit();
                console.log(`El id  de la orden en ${id}`);
                alert(`El id  de la orden en ${id}`);
              })
              .catch((error) => {
                console.log(error);
                alert(
                  "La compra no pudo ser realizada, intente en otro momento"
                );
              })
              .finally(() => {
                clearCart();
                console.log(cart);
                setModal(true);
              });
          }
        }
      }
    }
  };
  if (modal === true) {
    return (
      <div className="modal-container">
        <div className="modal modal-close">
          <div className="textos">
            <p> Su orden ya fue registrada en la base de datos</p>
            <p id="orden">

            </p>
            <Link to="/" className="finalizar">
              {" "}
              Gracias por utilizar nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form className="form">
        <h2 className="title">Formulario de Cliente</h2>
        <div className="formCont">
          <label htmlFor="nombre" className="label">
            Nombre:{" "}
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre y Apellido"
            className="input"
          ></input>
          <label htmlFor="tel" className="label">
            Telefono:
          </label>
          <input
            id="tel"
            type="tel"
            placeholder="Numero de telefono"
            className="input"
          ></input>
          <label htmlFor="mail" className="label">
            E-Mail:
          </label>
          <input
            id="mail"
            type="email"
            placeholder="E-Mail"
            className="input"
          ></input>
          <label htmlFor="addres" className="label">
            Dirección:
          </label>
          <input
            id="address"
            type="text"
            placeholder="Dirección"
            className="input"
          ></input>
          <button type="button" onClick={() => Finalizar()} id="abrir">
            {" "}
            Finalizar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

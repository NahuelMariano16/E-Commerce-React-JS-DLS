import {useState, useEffect } from 'react'

const ItemCount = (stock, initial, onAdd) =>{

    // const myState = useState(0);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Se monto el componente')
    }, []);

    useEffect(()=>{
        console.log('Cambio el contador')
    }, [count]);

    const decrement = () =>{
        console.log('Decremento');
        setCount(count -1)
    };

    const increment = () =>{
        if(count < stock){
            console.log('Incremento');
            setCount(count +1)
        }

    };

    return(
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
                <br></br>
                <button onClick={()=>onAdd(count)}> Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
import {useState, useEffect } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) =>{

    const [count, setCount] = useState(1);

    useEffect(()=>{
        console.log('Se monto el componente')
    }, []);

    useEffect(()=>{
        console.log('Cambio el contador')
    }, [count]);

    const decrement = () =>{
        if(count >=2){
            console.log('Decremento');
            setCount(count -1)
            //Condicional agregado 
        }
    };

    const increment = () =>{
        if(count < 10){
            console.log('Incremento');
            setCount(count +1)
        }

    };

    return(
        <div>
            <div className='counter'>
                <div className='counterCont'>
                <button onClick={decrement} className='btn'>-</button>
                <p>{count}</p>
                <button onClick={increment} className='btn'>+</button>
                </div>
                <button onClick={()=>onAdd(count)}> Agregar al Carrito </button>
            </div>
        </div>
    );
}

export default ItemCount;
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    

    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (count) =>{
        setQuantity(count);
        console.log(count)
    }
    // const onAdd = (quantity, count) => {
    //     console.log(`Se agregaron ${quantity} productos`)
    //     setQuantity(count)
    // }

    
    return(
        <div className='container'>
            <h2>Item Detail</h2>
            <section className='Card'>
                <header>
                    <h3>
                        {name}
                    </h3>
                </header>
                <div>
                    <img src={img} alt={name} className="Img"/>
                </div>
                <section className='infoCont'>
                    <p className='info'>
                        Categria: {category}
                    </p>
                    <p className='info'>
                        Descripción: {description}
                    </p>
                    <p className='info'>
                        Precio: {price}
                    </p>
                </section>
                <footer className='footer'>
                    {quantity > 0 ? <Link to='/cart' className='cartLink'>Ir al carrito</Link>:<ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>}
                </footer>
            </section>
        </div>
    )
}

export default ItemDetail
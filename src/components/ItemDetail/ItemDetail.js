import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const OnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
}


const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    return(
        <div>
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
                    <ItemCount initial={1} stock={10} onAdd={OnAdd}/>
                </section>
            </section>
        </div>
    )
}

export default ItemDetail
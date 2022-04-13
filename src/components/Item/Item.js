import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) =>{
    return(
        <section className="cardCont">
            <picture className="card">
                <h3 className='prodName'>{name}</h3>
                <img src={img} alt={name} className="imgProd"/>
                <p className='prodPrice'>'$'{price}</p>
                <br></br>
               <Link to={`/detail/${id}`} className='detailBtn'>Ver Detalles </Link>
            </picture>
        </section>
    )
}

export default Item

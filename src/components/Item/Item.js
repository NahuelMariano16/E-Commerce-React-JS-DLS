import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../App'

const Item = ({id, name, img, price }) =>{

    const value = useContext(Context);

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

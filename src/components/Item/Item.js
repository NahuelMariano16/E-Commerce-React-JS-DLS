import './Item.css'

const Item = ({name, img }) =>{
    return(
        <section className="cardCont">
            <picture className="card">
                <h3>{name}</h3>
                <img src={img} alt={name} className="imgProd"/>
                <br></br>
                <button>Ver Detalles</button>
                
            </picture>
        </section>
    )
}

export default Item

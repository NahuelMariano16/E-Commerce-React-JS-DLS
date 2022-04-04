import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div>
            {products.map(prods => <Item key={prods.id} {...prods}/>)}
        </div>
    
      
    )
}

export default ItemList
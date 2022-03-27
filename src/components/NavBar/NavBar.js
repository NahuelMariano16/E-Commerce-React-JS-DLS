import './NavBar.css' 
import CartWidget from '../CartWidget/CartWidget'

const NavBar =()=>{
    return(
        <nav className='NavBar'>
            <div>
                <img src={'./images/logo.png'} alt='DLS Tienda' className="logo"/>  
            </div>

            <div>
                <button className='listItem'>Celulares</button> 
                <button className='listItem'>Tablets</button> 
                <button className='listItem'>Notebooks</button>
            </div> 
            
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
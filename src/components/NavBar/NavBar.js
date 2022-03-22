import './NavBar.css' 

const NavBar =()=>{
    return(
        <nav className='NavBar'>
            <img src="logo.png" alt='DLS Tienda' className="logo"/>
            <a href="" className='listItem'>Celulares</a> 
            <a href="" className='listItem'>Tablets</a> 
            <a href="" className='listItem'>Notebooks</a> 
            <img src="" alt="Logo Shopcart" className="logoCart"/>
        </nav>
    )
}

export default NavBar
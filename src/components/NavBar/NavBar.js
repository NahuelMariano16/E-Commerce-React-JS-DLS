import './NavBar.css' 
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from '../dataBase'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'
const NavBar =()=>{

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        // getCategories().then(categories =>{
        //     setCategories(categories)
        // })

        getDocs(collection(firestoreDb, 'categories')).then(response =>{
            const categories = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return(
        <nav className='NavBar'>
            <Link to='/'>
                <img src={'./images/logo.png'} alt='DLS Tienda' className="logo"/>  
            </Link>
            
            
            {/* <div className='listContainer'>
                <button className='listItem'>Celulares</button> 
                <button className='listItem'>Tablets</button> 
                <button className='listItem'>Notebooks</button>
                {/* <NavLink to='/list' className={({isActive}) => isActive?'ActiveOption':'Option' }>List</NavLink>
                <NavLink to='/detail' className={({isActive}) => isActive?'ActiveOption':'Option' }>Detail</NavLink> */}
            {/* </div>  */}
            {categories.map(cat =><NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive})=> isActive?'ActiveOption': 'Option'}>{cat.description}</NavLink>)}
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
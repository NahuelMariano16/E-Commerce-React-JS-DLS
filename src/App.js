import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState, createContext} from 'react';
import { CartContextProvider } from './context/CartContext';

export const Context = createContext()

const App=()=> {

  // const [cart, setCart] = useState([])
  // console.log(cart)


  return (
    <div className="App">
      {/* <Context.Provider value={{cart, setCart}}> */}
        <CartContextProvider>
          <BrowserRouter >
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>Error 404 NOT FOUND</h1>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      {/* </Context.Provider> */}
      {/* <ItemListContainer greetings='Bienvenidos a DLS Commerce' />   */}
    </div>
  );
}

export default App;

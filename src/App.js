import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const App=()=> {
  


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/list' element={<ItemListContainer />} />
          <Route path='detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greetings='Bienvenidos a DLS Commerce' />   */}
    </div>
  );
}

export default App;

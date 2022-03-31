import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const App=()=> {
  const OnAdd = (cantidad) =>{
    console.log(`Se agregaron ${cantidad} de productos al carrito`)
  }

  return (
    <div className="App">
      <header>
       <NavBar />
      </header>
      <br></br>
      <ItemListContainer greetings='Bienvenidos a DLS Commerce' />
      <ItemCount initial={0} stock={10} onAdd={OnAdd}/>
    </div>
  );
}

export default App;

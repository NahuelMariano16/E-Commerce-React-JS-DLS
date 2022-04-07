import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
const App=()=> {
  
  

  return (
    <div className="App">
      <header>
       <NavBar />
      </header>
      <br></br>
      {/* <ItemListContainer greetings='Bienvenidos a DLS Commerce' />   */}
      <ItemDetailContainer  /> 
      
    </div>
  );
}

export default App;

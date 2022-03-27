import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
       <NavBar />
      </header>
      <br></br>
      <ItemListContainer greetings='Bienvenidos a DLS Commerce'/>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from "./Components/Header/NavBar.js"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Welcome to Mi Tienda Online"/>
    </>
  );
}

export default App;


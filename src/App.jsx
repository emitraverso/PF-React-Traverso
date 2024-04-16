
import './App.css'
import Brand from './components/Brand/Brand';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return(
    <div>
      <div className='header'>
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer greeting="Bienvenido/a a INTEGRALOG!" />
    </div>
  ) 
}

export default App;

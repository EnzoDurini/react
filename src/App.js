import './App.css';
import Iphone from './components/Iphone';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (<>
    <Navbar/>
    <Iphone/>
    <ItemListContainer gracias={'Hola que onda?Gracias por pasarte'}/>;
  </>
    
  );
}

export default App;

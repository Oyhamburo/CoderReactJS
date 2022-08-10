import './App.css';
import CheckOut from './components/carrito/carrito';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemContainer />}/>
            <Route path="/contacto" element={<h1>Contacto</h1>}/>
            <Route path="/producto" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CheckOut />}/>
            <Route path="/producto/:id" element={<ItemDetailContainer />}/>
            <Route path="*" element={<h1>Error 404</h1>}/>
          </Routes>
          {/* <ItemContainer title='Titulo Cortinas 1'/> */}
          {/* <ItemContainer title='Titulo Cortinas 2'/> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

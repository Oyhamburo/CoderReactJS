import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemDetailContainer />
        {/* <ItemContainer title='Titulo Cortinas 1'/> */}
        {/* <ItemContainer title='Titulo Cortinas 2'/> */}
      </header>
    </div>
  );
}

export default App;

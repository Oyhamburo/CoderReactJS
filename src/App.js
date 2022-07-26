import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemContainer title='Titulo Cortinas 1'/>
        <ItemContainer title='Titulo Cortinas 2'/>
      </header>
    </div>
  );
}

export default App;

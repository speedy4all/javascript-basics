import './App.css';
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Home permissions={['READ_TODOS', 'ADMIN']} />
    </div>
  );
}

export default App;

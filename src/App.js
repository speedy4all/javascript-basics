import './App.css';
import Home from "./containers/Home";
import HomeClassComponent from "./containers/HomeClassComponent";

function App() {
  return (
    <div className="App">
      <Home name="Sidona" />
      <HomeClassComponent name="Bogdan"/>
    </div>
  );
}

export default App;

import './App.css';

const Player = require('./images/icons8-chess-64.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LANDMINES</h1>
      </header>
      <img src={Player} alt="Player"/>
    </div>
  );
}

export default App;

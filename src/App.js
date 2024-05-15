import './App.css';
import Canvas from './canvas/Canvas';
import Tools from './tools/Tools';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas width={200} height={200}/>
        <Tools/>
      </header>
    </div>
  );
}

export default App;

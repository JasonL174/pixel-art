import './App.css';
import Canvas from './canvas/Canvas';
import Tools from './tools/Tools';
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('black');
  const [grid, setGrid] = useState({rows: 16, cols: 16});

  return (
    <div className="App">
      <header className="App-header">
        <Canvas color={color} grid={grid} setGrid={setGrid} />
        <Tools color={color} setColor={setColor} grid={grid} setGrid={setGrid}/>
      </header>
    </div>
  );
}

export default App;

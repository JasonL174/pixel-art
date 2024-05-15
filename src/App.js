import './App.css';
import Canvas from './canvas/Canvas';
import Tools from './tools/Tools';
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('black');
  const [line_width, setLineWidth] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <Canvas color={color} line_width={line_width}/>
        <Tools color={color} setColor={setColor} setLineWidth={setLineWidth}/>
      </header>
    </div>
  );
}

export default App;

import './Tools.css'
import {useState} from 'react';




function Tools(props) {
    const [rows, setRows] = useState(props.grid.rows);
    const [cols, setCols] = useState(props.grid.cols);

    function colorChange() {
        if (props.color === 'blue') {
            props.setColor('black');
        } else {
            props.setColor('blue');
        }
    }


    function thickPen() {
        props.setLineWidth(10);
    }

    function thinPen() {
        props.setLineWidth(5);
    }

    function paint() {

    }

    function eraser() {
        props.setColor('white');
    }

    function changeRows(e) {
        console.log(e.target.value);
        if (!isNaN(e.target.value)) {
            setRows(e.target.value);
        }
    }

    function changeCols(e) {
        if (!isNaN(e.target.value)) {
            setCols(e.target.value);
        }
    }

    function changeGrid() {
        props.setGrid((prev) => ({...prev, rows: rows, cols: cols}))
    }

    

    return (
        <div className='sidebar'>
            <p>sidebar</p>
            <div id='color' onClick={colorChange}>Color</div>
            <div id='pencil' onClick={thinPen}>Pencil</div>
            <div id='paintbrush' onClick={thickPen}>Paintbrush</div>
            <div id='paint' onClick={paint}>Paint</div>
            <div id='eraser' onClick={eraser}>Eraser</div>
            <div>Undo</div>
            <div>Redo</div>
            <div id='line'> 
                <p>Set Width</p>
                <input placeholder="Enter size" value={rows} onChange={changeRows}/>
                <p>Set Height</p>
                <input placeholder="Enter size" value={cols} onChange={changeCols}/>
                <p>Submit</p>
                <button onClick={changeGrid} onKeyDown={changeGrid}>Submit</button>
            </div>

        </div>
    );
}


export default Tools;
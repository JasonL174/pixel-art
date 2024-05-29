import './Tools.css'
// import {useState} from 'react';




function Tools(props) {
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

    function line_change(e) {
        if (typeof e.target.value == "number") {
            props.setLineWidth(e.target.value);
        } else {
            
        }
    }

    

    return (
        <div className='sidebar'>
            <p>This is the sidebar</p>
            <div id='color' onClick={colorChange}>Color</div>
            <div id='pencil' onClick={thinPen}>Pencil</div>
            <div id='paintbrush' onClick={thickPen}>Paintbrush</div>
            <div id='paint' onClick={paint}>Paint</div>
            <div id='eraser' onClick={eraser}>Eraser</div>
            <div>Undo</div>
            <div>Redo</div>
            <div id='line'> 
                <p>Set Width</p>
                <input placeholder="Enter pixel size" value={props.line_width} on={line_change}/>
            </div>
        </div>
    );
}


export default Tools;
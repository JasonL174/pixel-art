import './Tools.css'
// import {useEffect} from 'react';




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

    return (
        <div className='sidebar'>
            <p>This is the sidebar</p>
            <div id='color' onClick={colorChange}>Color</div>
            <div id='pencil' onClick={thinPen}>Pencil</div>
            <div id='paintbrush' onClick={thickPen}>Paintbrush</div>
            <div>Paint</div>
            <div>Eraser</div>
            <div>Undo</div>
            <div>Redo</div>
        </div>
    );
}


export default Tools;
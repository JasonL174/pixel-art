import {useEffect, useState} from 'react';
import './Canvas.css'

function Canvas(props) {
    const [canvas, setCanvas] = useState(createEmptyCanvas(props.grid.rows, props.grid.cols));

    function createEmptyCanvas(r, c) { // Let (r, c) be the new canvas size, expensive to use
        let new_canvas = [];
        for (let i = 0; i < r; i++) {
            const row = [];
            for (let j = 0; j < c; j++) {
                row.push({id: `${i},${j}`, rgb: '#ffffff'});
            }
            new_canvas.push(row);
        }
        return new_canvas;
    }

    useEffect(() => { // Change with regards to changes to canvas size
        let rows = props.grid.rows;
        let cols = props.grid.cols;

        setCanvas(prev_canvas => {
            if (!prev_canvas) return createEmptyCanvas(rows, cols);

            let new_canvas = createEmptyCanvas(rows, cols);

            for (let i = 0; i < Math.min(rows, prev_canvas.length); i++) {
                for (let j = 0; j < Math.min(cols, prev_canvas[i].length); j++) {
                    new_canvas[i][j] = prev_canvas[i][j];
                }
            }

            return new_canvas;
        });
    }, [props.grid]);

    useEffect(() => { // Change with regards to 
        
    })

    function handleClick(s) {
        let comma = s.indexOf(",");
        let i = parseInt(s.substring(0, comma));
        let j = parseInt(s.substring(comma+1));
        console.log(i.toString().concat(",".concat(j.toString())));

        let prev_c = canvas[i][j]["rgb"]
        let next_c = "#000000"
        if (prev_c === "#000000") {
            next_c = "#ffffff"
        }
        
        setCanvas(prev_canvas => {
            const new_canvas = prev_canvas.map(r => r.map(c => ({...c})));
            new_canvas[i][j] = {id: `${i},${j}`, rgb: next_c};
            return new_canvas;
        });
    }

    var output = canvas.map(r => 
        <div className='row'>
        {r.map(c => 
            <div className='cell' key={c.id} onClick={() => handleClick(c.id)} style={{ '--cell-bg-color': c.rgb }}>

            </div>)}
        </div>)

    return <div className="canvas">{output}</div>
}


export default Canvas;
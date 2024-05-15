import {useRef, useEffect} from 'react';
import './Canvas.css'

let canvas_width = 1300, canvas_height = 750;
let line_width = 5;


function Canvas(props) {

    const canvas_ref = useRef(null);

    useEffect(() => {
        const canvas = canvas_ref.current;
        const context = canvas.getContext('2d');
        let coord = {x:0, y:0}

        // context.fillStyle = 'red';

        let flag = false;

        function getPosition(canvas, event){ 
            const rect = canvas.getBoundingClientRect()
            coord.x = event.clientX - rect.left; 
            coord.y = event.clientY - rect.top; 
          } 
        
        function draw(canvas, event, ctx) {
            ctx.beginPath();
            ctx.lineWidth = line_width;
            ctx.lineCap = 'round'; 
            ctx.moveTo(coord.x, coord.y)
            getPosition(canvas, event)
            ctx.lineTo(coord.x, coord.y)
            ctx.stroke();
        }

        canvas.addEventListener('mousedown', (e) => {
            flag = true;
            getPosition(canvas, e)
        });

        canvas.addEventListener('mouseup', () => {
            flag = false;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (flag) {
                draw(canvas, e, context);
            }
        });
    }, []);

    return <canvas ref={canvas_ref} width={canvas_width} height={canvas_height}/>
}


export default Canvas;
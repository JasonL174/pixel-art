import {useRef, useEffect} from 'react';
import './Canvas.css'

let canvas_width = 1300, canvas_height = window.innerHeight;
// let line_color = 'black';


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
            console.log(props.line_width);
            ctx.lineWidth = props.line_width;
            ctx.lineCap = 'round'; 
            ctx.moveTo(coord.x, coord.y);
            ctx.strokeStyle = props.color;
            getPosition(canvas, event);
            ctx.lineTo(coord.x, coord.y);
            ctx.stroke();
        }

        const handleMouseDown = (e) => {
            flag = true;
            getPosition(canvas, e)
        };

        const handleMouseUp = () => {
            flag = false;
        }

        const handleMouseMove = (e) => {
            if (flag) {
                draw(canvas, e, context);
            }
        }

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
        }
    }, [props.line_width, props.color]);

    return <canvas ref={canvas_ref} width={canvas_width} height={canvas_height}/>
}


export default Canvas;
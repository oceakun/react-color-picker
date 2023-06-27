import React from "react";
import { Stage, Layer, Line, Shape } from "react-konva";
import SVGChart from "../assets/chart.svg";
import Konva from "konva";
  import { Annotation, SubjectCircle, ConnectorElbow, ConnectorEndDot, 
    Note } from 'react-annotation'

function WaveChart(props) {
  console.log("input : ", props.data);
  const x = 100;
  const y = 50;

  //You can customize just by using the same
  //values you would pass to annotation
  const circle = (
    <circle cx={x} cy={y} r={7} fill="none" stroke="yellow" />
  );

  return (
    <>
      <img src={SVGChart} />
    </>
    // <Stage width={window.innerWidth} height={window.innerHeight}>
    //   <Layer>
    //     <Shape
    //       sceneFunc={(context, shape) => {
    //         context.beginPath();
    //         context.moveTo(0, 800);
    //         // context.lineTo(30, 500);
    //         context.quadraticCurveTo(35, 500, 390, 670);
    //         context.quadraticCurveTo(490, 670, 460, 500);
    //         context.quadraticCurveTo(560, 500, 590, 770);
    //         // context.closePath();
    //         context.fillStyle = "rgba(0,0,0,0.3)";
    //         context.strokeStyle = "green";
    //         context.fill();
    //         context.stroke();
    //       }}
    //       strokeWidth={4}
    //     />
    //     <Shape
    //       sceneFunc={(context, shape) => {
    //         // Box width
    //         const bw = 640;
    //         // Box height
    //         const bh = 800;
    //         // Padding
    //         const p = 10;

    //         function drawBoard() {
    //           for (let x = 0; x <= bw; x += 80) {
    //             context.moveTo(0.5 + x + p, p);
    //             context.lineTo(0.5 + x + p, bh + p);
    //           }

    //           for (let y = 0; y <= bh; y += 80) {
    //             context.moveTo(p, 0.5 + y + p);
    //             context.lineTo(bw + p, 0.5 + y + p);
    //           }
    //           context.strokeStyle = "black";
    //           context.stroke();
    //         }

    //         drawBoard();

    //         const fontSize = 34;
    //         // context.font = `${fontSize}px Arial`;
    //         context.fillStyle = "red";
    //         // context.textAlign = "left";
    //         // context.textBaseline = "middle";
    //         context.fillText(`text`, 80, 840);
    //         context.fillText(`text`, 160, 840);
    //         context.fillText(`text`, 240, 840);
    //         context.fillText(`text`, 320, 840);
    //         context.fillText(`text`, 400, 840);
    //         context.fillText(`text`, 480, 840);
    //         context.fillText(`text`, 560, 840);
    //         context.fillText(`text`, 640, 840);
    //         context.fillText(`800`, 0, 0);
    //         context.fillText(`720`, 0, 80);
    //         context.fillText(`640`, 0, 160);
    //         context.fillText(`560`, 0, 240);
    //         context.fillText(`480`, 0, 320);
    //         context.fillText(`400`, 0, 400);
    //         context.fillText(`320`, 0, 480);
    //         context.fillText(`240`, 0, 560);
    //         context.fillText(`160`, 0, 640);
    //         context.fillText(`80`, 0, 720);
    //         context.fillText(`0`, 0, 800);

    //         context.beginPath();
    //         context.moveTo(0, 800);
    //         // context.lineTo(30, 500);
    //         context.arcTo(30, 500, 390, 670, 90);
    //         // context.lineTo(490, 670);
    //         context.arcTo(490, 670, 460, 550, 90);
    //         // context.lineTo(560, 500);
    //         context.arcTo(560, 190, 660, 770, 20);
    //         // context.closePath();
    //         // context.tension(0.5);
    //         context.fillStyle = "rgba(0,256,0,0.3)";
    //         context.strokeStyle = "green";
    //         context.fill();
    //         context.stroke();
    //       }}
    //       strokeWidth={4}
    //     />
    //   </Layer>
    // </Stage>
    // <Stage width={window.innerWidth} height={window.innerHeight}>
    //   <Layer>
    //     <Line
    //       x={50}
    //       y={800}
    //       points={[
    //         0, -20, 100, -220, 200, -160, 300, -320, 400, -180, 500, -180, 600,
    //         -480, 700, -280,
    //       ]}
    //       tension={0.5}
    //       // closed
    //       fill="rgba(256,0,256,0.3)"
    //       stroke="rgba(256,0,256,0.3)"
    //       opacity={0.7}
    //     />
    //     <Line
    //       x={50}
    //       y={800}
    //       points={[
    //         0, -40, 100, -330, 200, -250, 300, -440, 400, -80, 500, -180, 600,
    //         -280, 700, -80,
    //       ]}
    //       tension={0.5}
    //       // closed
    //       fill="rgba(0,26,256,0.3)"
    //       stroke="rgba(0,26,256,0.9)"
    //       opacity={0.7}
    //     />
    //     <Line
    //       x={50}
    //       y={800}
    //       points={[
    //         0, -50, 100, -430, 200, -350, 300, -540, 400, -180, 500, -280, 600,
    //         -380, 700, -280,
    //       ]}
    //       tension={0.5}
    //       fill="rgba(0,256,0,1)"
    //       // closed
    //       stroke="rgba(0,256,0,1)"
    //       opacity={0.3}
    //     />
    //     <Line
    //       x={50}
    //       y={800}
    //       points={[0, -20, 700, -20]}
    //       lineJoin
    //       stroke="rgba(0,0,256,0.6)"
    //     />
    //   </Layer>
    // </Stage>
  );
}

export default WaveChart;

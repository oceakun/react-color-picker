import React,{useState} from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import Konva from 'konva';

const ColoredRect = () => {
  const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text x={200} y={350} text="Some text on canvas" fontSize={15} />
        <Rect
          x={20}
          y={300}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />
        <Circle x={200} y={350} radius={50} fill="green" />
        <Line
          x={20}
          y={500}
          points={[0, 0, 100, 0, 100, 0]}
          tension={1}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
        />
      </Layer>
    </Stage>
  );
};

export default ColoredRect;
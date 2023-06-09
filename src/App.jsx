import { useEffect, useState } from 'react';
import styled from "styled-components";
import Picker from "./containers/Picker";
import hexRgb from 'hex-rgb';
import ColorizeIcon from '@mui/icons-material/Colorize';
import { Stage, Layer, Rect, Text } from "react-konva";
import ColoredRect from "./components/ColoredRect";
import WaveChart from "./components/WaveChart";
import BasicAnnotations from "./components/annotations/BasicAnnotations";
import Formatters from "./components/labelFormat/Formatters";
function App() {
  const [hexCodeForMainColor, setHexCodeForMainColor] = useState("#101010");
  const [shades, setShades] = useState([]);
  const [pickerVisibility, setPickerVisibility] = useState("block");
  const [opacity, setOpacity] = useState(1);

  const inputData = [
    {
      today: [
        { value: 2, text: "Sam" },
        { value: 4, text: "Sam" },
        { value: 1, text: "Sam" },
        { value: 0, text: "Sam" },
        { value: 5, text: "Sam" },
        { value: 9, text: "Sam" },
        { value: 8, text: "Sam" },
        { value: 7, text: "Sam" },
      ],
    },
    {
      yesterday: [
        { value: 3, text: "Sam" },
        { value: 4, text: "Sam" },
        { value: 6, text: "Sam" },
        { value: 2, text: "Sam" },
        { value: 7, text: "Sam" },
        { value: 8, text: "Sam" },
        { value: 3, text: "Sam" },
        { value: 6, text: "Sam" },
      ],
    },
    {
      tomorrow: [
        { value: 4, text: "Sam" },
        { value: 5, text: "Sam" },
        { value: 10, text: "Sam" },
        { value: 6, text: "Sam" },
        { value: 3, text: "Sam" },
        { value: 7, text: "Sam" },
        { value: 0, text: "Sam" },
        { value: 5, text: "Sam" },
      ],
    },
  ];
  const handlePickerVisibility = () => {
    // console.log("handlePickerVisibility");
    if (pickerVisibility == "hidden") setPickerVisibility("visible");
    else setPickerVisibility("hidden");
  };

  return (
    <AppContainer>
      <Formatters />
      <BasicAnnotations />
      <WaveChart data={inputData} />
      {/* <ColoredRect /> */}

      {/* <span onClick={()=>handlePickerVisibility()}><ColorizeIcon/></span>

      <MainColorContainer>
        <legend>Color</legend>
        <ColorSquare background={hexCodeForMainColor}/>
        <span>{hexCodeForMainColor}</span>
      </MainColorContainer>

      <ShadesContainer>
        <legend>Shades</legend>
        {
          shades.map((shade, index)=>{

            const rgbValue = hexRgb(hexCodeForMainColor);
            const currentShade = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${(+shade.post/100 * opacity).toFixed(2)})`;
            return (
              <EachShade key={index}>
              <ColorSquare background={currentShade}/>
              <span>{currentShade}</span>
              </EachShade>
            )
          })
        }
      </ShadesContainer>

      <Picker setHexCodeForMainColor={setHexCodeForMainColor} setShades={setShades} visibility={pickerVisibility} setPickerVisibility={setPickerVisibility} opacity={opacity} setOpacity={setOpacity}/> */}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  > span {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 2px;
    background: black;
    color: white;
  }
  > span:hover {
    cursor: pointer;
    color: black;
    background: white;
  }
`;

const MainColorContainer = styled.fieldset`
display:flex;
flex-flow:row nowrap;
justify-content:center;
align-items:center;
gap:10px;
border:1px solid gray;
border-radius:4px;
background:white;
>legend{
  color:black;
}
>span{
  color:blue;
}
`;

const ColorSquare = styled.span`
  width: 23.25px;
  height: 22.5px;
  background: ${(props) => props.background};
`;

const EachShade = styled.span`
display:flex;
flex-flow:row nowrap;
justify-content:center;
align-items:center;
gap:10px;
`;

const ShadesContainer = styled.fieldset`
display:flex;
flex-flow:column wrap;
justify-content:flex-start;
align-items:flex-start;
gap:10px;
border:1px solid gray;
border-radius:4px;
background:white;
width:200px;
height:320px;
>legend{
  color:black;
}
>span{
  color:blue;
}
`;
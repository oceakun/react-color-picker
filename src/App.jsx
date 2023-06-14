import { useEffect, useState } from 'react';
import styled from "styled-components";
import Picker from "./containers/Picker";
import hexRgb from 'hex-rgb';
import ColorizeIcon from '@mui/icons-material/Colorize';

function App() {

  const [hexCodeForMainColor, setHexCodeForMainColor] = useState("#101010");
  const [shades, setShades] = useState([]);
  const [pickerVisibility, setPickerVisibility] = useState("visible");
  const [opacity, setOpacity] = useState(1);

  const handlePickerVisibility = ()=>{
    // console.log("handlePickerVisibility");
    if(pickerVisibility=="hidden")
    setPickerVisibility("visible");
    else
    setPickerVisibility("hidden");
  }

  return (
    <AppContainer>
      <span onClick={()=>handlePickerVisibility()}><ColorizeIcon/></span>

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

      <Picker setHexCodeForMainColor={setHexCodeForMainColor} setShades={setShades} visibility={pickerVisibility} setPickerVisibility={setPickerVisibility} opacity={opacity} setOpacity={setOpacity}/>

    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  margin-top:-400px;
  margin-left:20px;
  background:transparent;
  display:flex;
  flex-flow:column nowrap;
  justify-content:flex-start;
  align-items:flex-start;
  gap:20px;
  >span{
    border:1px solid black;
    border-radius:5px;
    padding:0 12px;
  }
  >span:hover{
    cursor:pointer;
    background:gray;
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
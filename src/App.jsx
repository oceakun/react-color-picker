import { useEffect, useState } from 'react'
import styled from "styled-components"
import './App.css'
import SolidPicker from './components/SolidPicker'
import GradientPicker from './components/GradientPicker'
import ShadePicker from './components/ShadePicker'
import CancelIcon from '@mui/icons-material/Cancel';
import hexRgb from 'hex-rgb';


function App() {
  const [colorPicked, setColorPicked] = useState("rgba(16,16,16,1)");
  const [hexCodeForColorPicked, setHexCodeForColorPicked] = useState("#101010");
  const [gradientPicked, setGradientPicked] = useState([]);
  const [shadesPicked, setShadesPicked] = useState([]);
  const [opacity, setOpacity] = useState(1);
  const [gradientForShadePicker, setGradientForShadePicker] = useState("rgba(16,16,16,0) 0%, rgba(16,16,16,1) 100%");

  useEffect(() => {
    // console.log("shadesPicked : ", shadesPicked);
    // console.log("colorPicked : ", colorPicked);
  }, [colorPicked, shadesPicked]);

  useEffect(() => {
    const rgbValue = hexRgb(hexCodeForColorPicked);
    const extremeLeftShade = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},0)`;
    const extremeRightShade = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${opacity})`;
    setGradientForShadePicker(`${extremeLeftShade} 0%, ${extremeRightShade} 100%`);
  }, [hexCodeForColorPicked, opacity]);

  return (
    <AppContainer>
      <Picker>
        <Header>
          <p>Colors</p>
          <span><CancelIcon /></span>
        </Header>
        {/* <GradientPicker setGradientPicked={setGradientPicked} color={colorPicked} /> */}
        <ShadePicker gradientForShadePicker={gradientForShadePicker} hexCodeForColorPicked={hexCodeForColorPicked} setShadesPicked={setShadesPicked} color={colorPicked} opacity={opacity} />
        <SolidPicker setHexCodeForColorPicked={setHexCodeForColorPicked} setColorPicked={setColorPicked} setOpacity={setOpacity} />
      </Picker>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  background-color:transparent;
  border:none;
`;

const Picker = styled.div`
  padding:10px;
  background-color:white;
  border-radius: 10px;
`;

const Header = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
  // gap:30px;
  >p{
    color : #3B3B3B;
  }
  >span{
    color: rgba(60, 60, 67, 0.6);
  }
  >span:hover{
    cursor:pointer;
    color: rgba(60, 60, 67, 0.8);
  }
`;

import { useEffect, useState } from 'react';
import styled from "styled-components";
import SolidPicker from '../components/SolidPicker';
import GradientPicker from '../components/GradientPicker';
import ShadePicker from '../components/ShadePicker';
import CancelIcon from '@mui/icons-material/Cancel';
import hexRgb from 'hex-rgb';

function Picker(props) {
    const [colorPicked, setColorPicked] = useState("rgba(16,16,16,1)");
    const [hexCodeForMainColor, setHexCodeForMainColor] = useState("#101010");
    const [gradientPicked, setGradientPicked] = useState([]);
    const [shades, setShades] = useState([]);
    const [gradientForShadePicker, setGradientForShadePicker] = useState("rgba(16,16,16,0) 0%, rgba(16,16,16,1) 100%");
  
    useEffect(() => {
      // props.setMainColor(hexCodeForMainColor);
      props.setHexCodeForMainColor(hexCodeForMainColor);
      props.setShades(shades);
    }, [hexCodeForMainColor, shades, props.opacity]);
  
    useEffect(() => {
      const rgbValue = hexRgb(hexCodeForMainColor);
      const extremeLeftShade = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},0)`;
      const extremeRightShade = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${props.opacity})`;
      setGradientForShadePicker(`${extremeLeftShade} 0%, ${extremeRightShade} 100%`);
    }, [hexCodeForMainColor, props.opacity]);
  
    const handleClosePicker = ()=>{
      props.setPickerVisibility("hidden");
    }

    return (
        <PickerContainer visibility={props.visibility}>
          <Header>
            <p>Colors</p>
            <span onClick={()=>handleClosePicker()}><CancelIcon /></span>
          </Header>
          {/* <GradientPicker setGradientPicked={setGradientPicked} color={colorPicked} /> */}
          <ShadePicker gradientForShadePicker={gradientForShadePicker} hexCodeForMainColor={hexCodeForMainColor} setShades={setShades} color={colorPicked} opacity={props.opacity} />
          <SolidPicker setHexCodeForMainColor={setHexCodeForMainColor} setColorPicked={setColorPicked} setOpacity={props.setOpacity} />
        </PickerContainer>
    )
}

export default Picker

const PickerContainer = styled.div`
  padding:10px;
  background-color:white;
  border-radius: 10px;
  position:absolute;
  z-index:5;
  visibility:${props=>props.visibility};
  margin-left:250px;
`;

const Header = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
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

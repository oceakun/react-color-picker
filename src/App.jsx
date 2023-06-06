import { useEffect, useState } from 'react'
import styled from "styled-components"
import './App.css'
import SolidPicker from './components/SolidPicker'
import GradientPicker from './components/GradientPicker'
import CancelIcon from '@mui/icons-material/Cancel';

function App() {
  const [colorPicked, setColorPicked] = useState("#101010");
  const [gradientPicked, setGradientPicked] = useState([]);

  useEffect(() => {
    // console.log("gradientPicked : ", gradientPicked);
  }, [gradientPicked]);

  return (
    <AppContainer>

      <ColorOutputs>
        <SolidColorSection background={colorPicked} ></SolidColorSection>
        <GradientSection background={gradientPicked}></GradientSection>
      </ColorOutputs>

      <Picker>
        <Header>
          <p>Colors</p>
          <span><CancelIcon /></span>
        </Header>
        <GradientPicker setGradientPicked={setGradientPicked} color={colorPicked} />
        <SolidPicker setColorPicked={setColorPicked} />
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
  margin-top:10px;
`;

const ColorOutputs = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-around;
  align-items:center;
`;


const SolidColorSection = styled.div`
  width:100px;
  height:100px;
  border-radius: 10px;
  background: ${(props) => props.background};
`;

const GradientSection = styled.div`
  width: 213px;
  height:100px;
  border-radius: 10px;
  background: linear-gradient(90deg, ${(props) => props.background});
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
`;
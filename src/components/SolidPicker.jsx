import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import hexRgb from 'hex-rgb';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function SolidPicker(props) {
  const [pickerAttributes, setPickerAttributes] = useState({
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    hex: "#101010"
  });

  const [githubColors, setGithubColors] = useState([
    "#FEFFFE", "#EBEBEB", "#D6D6D6", "#C2C2C2", "#ADADAD", "#999999", "#858585", "#707070", "#5C5C5C", "#474747", "#333333", "#000000",
    "#00374A", "#011D57", "#11053B", "#2E063D", "#3C071B", "#5C0701", "#5A1C00", "#583300", "#563D00", "#666100", "#4F5504", "#263E0F",
    "#004D65", "#012F7B", "#1A0A52", "#450D59", "#551029", "#831100", "#7B2900", "#7A4A00", "#785800", "#8D8602", "#6F760A", "#38571A",
    "#016E8F", "#0042A9", "#2C0977", "#61187C", "#791A3D", "#B51A00", "#AD3E00", "#A96800", "#A67B01", "#C4BC00", "#9BA50E", "#4E7A27",
    "#008CB4", "#0056D6", "#371A94", "#7A219E", "#99244F", "#E22400", "#DA5100", "#D38301", "#D19D01", "#F5EC00", "#C3D117", "#669D34",
    "#00A1D8", "#0061FD", "#4D22B2", "#982ABC", "#B92D5D", "#FF4015", "#FF6A00", "#FFAB01", "#FCC700", "#FEFB41", "#D9EC37", "#76BB40",
    "#01C7FC", "#3A87FD", "#5E30EB", "#BE38F3", "#E63B7A", "#FE6250", "#FE8648", "#FEB43F", "#FECB3E", "#FFF76B", "#E4EF65", "#96D35F",
    "#52D6FC", "#74A7FF", "#864FFD", "#D357FE", "#EE719E", "#FF8C82", "#FEA57D", "#FEC777", "#FED977", "#FFF994", "#EAF28F", "#B1DD8B",
    "#93E3FC", "#A7C6FF", "#B18CFE", "#E292FE", "#F4A4C0", "#FFB5AF", "#FFC5AB", "#FED9A8", "#FDE4A8", "#FFFBB9", "#F1F7B7", "#CDE8B5",
    "#CBF0FF", "#D2E2FE", "#D8C9FE", "#EFCAFE", "#F9D3E0", "#FFDAD8", "#FFE2D6", "#FEECD4", "#FEF1D5", "#FDFBDD", "#F6FADB", "#DEEED4"]);

  const [githubColorsBorders, setGithubColorsBorders] = useState(["#FEFFFE", "#EBEBEB", "#D6D6D6", "#C2C2C2", "#ADADAD", "#999999", "#858585", "#707070", "#5C5C5C", "#474747", "#333333", "#000000",
    "#00374A", "#011D57", "#11053B", "#2E063D", "#3C071B", "#5C0701", "#5A1C00", "#583300", "#563D00", "#666100", "#4F5504", "#263E0F",
    "#004D65", "#012F7B", "#1A0A52", "#450D59", "#551029", "#831100", "#7B2900", "#7A4A00", "#785800", "#8D8602", "#6F760A", "#38571A",
    "#016E8F", "#0042A9", "#2C0977", "#61187C", "#791A3D", "#B51A00", "#AD3E00", "#A96800", "#A67B01", "#C4BC00", "#9BA50E", "#4E7A27",
    "#008CB4", "#0056D6", "#371A94", "#7A219E", "#99244F", "#E22400", "#DA5100", "#D38301", "#D19D01", "#F5EC00", "#C3D117", "#669D34",
    "#00A1D8", "#0061FD", "#4D22B2", "#982ABC", "#B92D5D", "#FF4015", "#FF6A00", "#FFAB01", "#FCC700", "#FEFB41", "#D9EC37", "#76BB40",
    "#01C7FC", "#3A87FD", "#5E30EB", "#BE38F3", "#E63B7A", "#FE6250", "#FE8648", "#FEB43F", "#FECB3E", "#FFF76B", "#E4EF65", "#96D35F",
    "#52D6FC", "#74A7FF", "#864FFD", "#D357FE", "#EE719E", "#FF8C82", "#FEA57D", "#FEC777", "#FED977", "#FFF994", "#EAF28F", "#B1DD8B",
    "#93E3FC", "#A7C6FF", "#B18CFE", "#E292FE", "#F4A4C0", "#FFB5AF", "#FFC5AB", "#FED9A8", "#FDE4A8", "#FFFBB9", "#F1F7B7", "#CDE8B5",
    "#CBF0FF", "#D2E2FE", "#D8C9FE", "#EFCAFE", "#F9D3E0", "#FFDAD8", "#FFE2D6", "#FEECD4", "#FEF1D5", "#FDFBDD", "#F6FADB", "#DEEED4"])

  const [circlePickerColors, setCirclePickerColors] = useState(["#000000", "#B18CFE", "#EE719E", "#4D22B2", "#D8C9FE", "#FFAB01", "#FF8C82", "#FF4015", "#FE6250", "rgba(0, 0, 0, 0.15)"]);

  const [circlePickerColorsSpread, setCirclePickerColorsSpread] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [opacity, setOpacity] = useState(1);

  const [currentColor, setCurrentColor] = useState("rgba(16,16,16,1)");

  const [visitedColors, setVisitedColors] = useState([]);

  const [mostRecentColorLoadCount, setMostRecentColorLoadCount] = useState(0);

  useEffect((
  ) => {
    props.setColorPicked(currentColor);
  }, [currentColor]);

  const handleColorChoice = (colorIndex, color, event) => {
    
    const eventId = event.target.id;
    const oldCirclePickerColorsSpread = [...circlePickerColorsSpread];
    const oldGithubColorsBorders = [...githubColorsBorders];

    if (eventId == "colorCircle") {
      oldGithubColorsBorders.map((border, borderIndex) => {
        oldGithubColorsBorders[borderIndex] = githubColors[borderIndex];
      })

      oldCirclePickerColorsSpread.map((border, borderIndex) => {
        if (colorIndex == borderIndex) {
          oldCirclePickerColorsSpread[borderIndex] = 5;
        }
        else {
          oldCirclePickerColorsSpread[borderIndex] = 0;
        }
      })
    }

    else {
      oldCirclePickerColorsSpread.map((border, borderIndex) => {
        oldCirclePickerColorsSpread[borderIndex] = 0;

      })

      oldGithubColorsBorders.map((border, borderIndex) => {
        if (colorIndex == borderIndex) {
          oldGithubColorsBorders[borderIndex] = "#ffffff";
        }
        else {
          oldGithubColorsBorders[borderIndex] = githubColors[borderIndex];
        }
      })
    }

    setGithubColorsBorders(oldGithubColorsBorders);
    setCirclePickerColorsSpread(oldCirclePickerColorsSpread);

    if (opacity <= 1) {
      const rgbValue = hexRgb(color);
      const newOpacityAppliedColor = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${opacity})`;
      setCurrentColor(newOpacityAppliedColor);
    }

    setPickerAttributes({ ...pickerAttributes, hex: color });
    props.setHexCodeForMainColor(color);
    setVisitedColors([...visitedColors, color]);
  }

  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
    const newOpacity = event.target.value;
    setOpacity(newOpacity);
    props.setOpacity(newOpacity);
    const rgbValue = hexRgb(pickerAttributes.hex);
    const newOpacityAppliedColor = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${newOpacity})`;
    setCurrentColor(newOpacityAppliedColor);
  }

  const handleLoadMostRecentColor = () => {
    if (visitedColors.length == 0 || mostRecentColorLoadCount == visitedColors.length)
      return;

    const originalVisitedColors = [...circlePickerColors];
    let previousColor = originalVisitedColors[0];
    let newColor;
    for (let i = 1; i < 9; i++) {
      newColor = originalVisitedColors[i];
      originalVisitedColors[i] = previousColor;
      previousColor = newColor;
    }


    originalVisitedColors[0] = visitedColors[mostRecentColorLoadCount];
    originalVisitedColors[9] = "rgba(0, 0, 0, 0.15)";

    setCirclePickerColors(originalVisitedColors);
    const currentColorLoadCount = mostRecentColorLoadCount;
    setMostRecentColorLoadCount(currentColorLoadCount + 1);

  }

  return (
    <PickerWrapper>

      <GithubColorsWrapper>
        {
          githubColors.map((color, index) => {
            let borderRadius = "";

            if (index == 0)
              borderRadius = "5px 0px 0px 0px";
            else if (index == 11)
              borderRadius = "0px 5px 0px 0px";
            else if (index == 108)
              borderRadius = "0px 0px 0px 5px";
            else if (index == 119)
              borderRadius = "0px 0px 5px 0px";
            else
              borderRadius = "0px 0px 0px 0px";

            return (
              <GithubColorSquare id="githubColorSquare" onClick={(e) => handleColorChoice(index, color, e)} style={{ borderRadius: `${borderRadius}` }} key={index} background={color} border={githubColorsBorders[index]} />
            )
          })
        }
      </GithubColorsWrapper>

      <OpacitySlider id="range" type="range" step="0.01" min="0" max="1" onChange={handleOpacityChange} value={opacity} />

      <ChosenColorTextualDetails>
        <p style={{ color: "black" }}>Hex</p>
        <span style={{ color: "black" }}>{pickerAttributes.hex}</span>
      </ChosenColorTextualDetails>

      <CurrentAndRecentColors>
        <ColorChosen colorChosen={`${currentColor}`} />
        <RecentColorsWrapper>
          {
            circlePickerColors.map((color, index) => {
              if (color === "rgba(0, 0, 0, 0.15)")
                return (
                  <AddRecentColor onClick={() => handleLoadMostRecentColor()} key={index} >
                    <AddCircleOutlineIcon/>
                  </AddRecentColor>
                )
              else
                return (
                  <ColorCircle id="colorCircle" onClick={(e) => handleColorChoice(index, color, e)} key={index} background={color} spread={circlePickerColorsSpread[index]} />

                )
            })
          }
        </RecentColorsWrapper>
      </CurrentAndRecentColors>

    </PickerWrapper>
  )
}

export default SolidPicker

const PickerWrapper = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  gap:10px;
  > hr{
    width:100%;
    border: 1.5px solid rgba(0, 0, 0, 0.12);
  }
`;

const ChosenColorTextualDetails = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-around;
  align-items:center;
  gap:201px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  > span{
    box-sizing: border-box;
    width: 78px;
    height: 27px;
    border: 1px solid rgba(58, 135, 253, 0.38);
    border-radius: 6px;
    padding:1px;
  
`;

const ColorChosen = styled.div
  `
  width: 65px;
  height:65px;
  border-radius: 10px;
  background: ${(props) => props.colorChosen};
`;

const GithubColorsWrapper = styled.div`
  display:flex;
  flex-flow:row wrap;
  width: 303px;
  height: 245px;
  border:1px solid transparent;
  border-radius: 15px;
  margin:10px 0;
    `;

const OpacitySlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 303px;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  height: 7px;
  // background-color: rgb(131, 122, 122);
  // // background-image:url("../assets/flower.jpeg");
  // background-image:
  //     linear-gradient(45deg, #ccc 25%, transparent 25%),
  //     linear-gradient(-45deg, #ccc 25%, transparent 25%),
  //     linear-gradient(45deg, transparent 75%, #ccc 75%),
  //     linear-gradient(-45deg, transparent 75%, #ccc 75%);
  // background-size: 5px 5px;
  // background-position: 0 0, 0 2.5px, 2.5px -2.5px, -2.5px 0px;

  background-color: #ffffff;
  opacity: 0.4;
  background-image: repeating-linear-gradient(
      45deg,
      #babbcd 25%,
      transparent 25%,
      transparent 75%,
      #babbcd 75%,
      #babbcd
    ),
    repeating-linear-gradient(
      45deg,
      #babbcd 25%,
      #ffffff 25%,
      #ffffff 75%,
      #babbcd 75%,
      #babbcd
    );
  background-position: 0 0, 4px 4px;
  background-size: 8px 8px;

  margin: 10px 0 12px 0;
  &::-moz-slider-runnable-track {
    height: 13px;
    color: red;
    margin-top: -1px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 25px;
    width: 25px;
    background-color: rgb(80, 78, 77);
    border-radius: 50%;
    border: 4px solid rgb(255, 255, 255);
    // transition: .2s ease-in-out;
  }

  &::-moz-range-thumb {
    height: 18px;
    width: 18px;
    background-color: rgb(80, 78, 77);
    border-radius: 50%;
    border: 4px solid rgb(255, 255, 255);
    // transition: .2s ease-in-out;
  }
`;

const GithubColorSquare = styled.span`
  width: 23.25px;
  height: 22.5px;
  background: ${(props) => props.background};
  border:1px solid ${(props) => props.border};
  &:hover{
    border:1px solid #ffffff;
    border-radius: 5px;
    cursor:pointer;
  }
`;

const CurrentAndRecentColors = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  gap:30px;
`;

const RecentColorsWrapper = styled.div`
  display:flex;
  flex-flow:row wrap;
  align-items:center;
  width: 210px;
  height: 65px;
  border:1px solid transparent;
  border-radius: 15px;
  gap:10px 21.2px;
    `;

const AddRecentColor = styled.div`
  width: 23px;
  height: 23px;
  // border:1px solid rgba(0, 0, 0, 0.25);
  color:rgba(60, 60, 67, 0.6);
  border-radius:50%;
  // font-size:29px;
  // padding:0 11px;
  // margin-left:-6px;

  &:hover{
    cursor:pointer;
    // border:1px solid rgba(0, 0, 0, 55);
    color:rgba(0, 0, 0, 0.7);
  }
`;

const ColorCircle = styled.span`
  width: 25px;
  height: 25px;
  background: ${(props) => props.background};
  box-shadow: inset 0 0 0 3px ${(props) => props.background},inset 0 0 0 ${(props) => props.spread}px white;
  border-radius:50%;
  &:hover{
    cursor:pointer;
    box-shadow: inset 0 0 0 3px ${(props) => props.background},inset 0 0 0 5px white;
  }
`;
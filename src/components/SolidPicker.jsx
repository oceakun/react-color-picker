import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import hexRgb from 'hex-rgb';

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

  const [githubColors, setGithubColors] = useState(["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#008000",
    "#000080", "#808000", "#800000", "#008080", "#808080", "#C0C0C0", "#FF6347", "#00FF7F", "#6A5ACD", "#7FFF00",
    "#9370DB", "#FA8072", "#FAEBD7", "#F0FFF0", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#F5DEB3", "#FFF8DC", "#F0E68C",
    "#FFFACD", "#F5F5F5", "#FAFAD2", "#FFFFE0", "#FFF0F5", "#DCDCDC", "#E6E6FA", "#F8F8FF", "#F0F8FF", "#FFF5EE",
    "#F5FFFA", "#F0FFFF", "#FFF0F5", "#FFFFF0", "#FDF5E6", "#FFFAF0", "#FFFFF0", "#F0FFF0", "#FFF0F5", "#F0F8FF",
    "#F5F5F5", "#F8F8FF", "#FAEBD7", "#FAF0E6", "#FDF5E6", "#FFEBCD", "#FFE4C4", "#FFDEAD", "#FFDAB9", "#F0E68C",
    "#FFFACD", "#FFFFE0", "#FFF8DC", "#FFE4B5", "#F5DEB3", "#DEB887", "#D2B48C", "#D2691E", "#CD853F", "#FFD700",
    "#FFB90F", "#FFA500", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500", "#FF1493", "#FF00FF", "#EE82EE", "#DDA0DD",
    "#DA70D6", "#D8BFD8", "#DC143C", "#DB7093", "#D2691E", "#C71585", "#B22222", "#B8860B", "#CD5C5C", "#CD853F",
    "#D2B48C", "#DAA520", "#DDA0DD", "#D8BFD8", "#DA70D6", "#DB7093", "#DC143C", "#DCDCDC", "#DDA0DD", "#DEB887",
    "#E6E6FA", "#E9967A", "#EE82EE", "#EEE8AA", "#F08080", "#F0E68C", "#F0F8FF", "#F0FFF0", "#009900", "#F4A460",
    "#F5DEB3", "#F5F5DC", "#F5F5F5", "#F5FFFA", "#F8F8FF", "#FA8072", "#FAEBD7", "#FAF0E6", "#FAFAD2", "#000000"]);

  const [circlePickerColors, setCirclePickerColors] = useState(["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#999999", "#ffd9f4", "#00bcd4", "#009688", "rgba(0, 0, 0, 0.15)"]);

  const [opacity, setOpacity] = useState(1);

  const [currentColor, setCurrentColor] = useState("rgba(16,16,16,1)");

  const [visitedColors, setVisitedColors] = useState([]);

  const [mostRecentColorLoadCount, setMostRecentColorLoadCount] = useState(0);

  useEffect((
  ) => {
    // console.log("currentColor  :", currentColor);
    props.setColorPicked(currentColor);
  }, [currentColor]);

  const handleColorChoice = (color, event) => {
    // console.log("color : ", color);

    if (opacity <= 1) {
      // console.log("opacity : ", opacity);
      const rgbValue = hexRgb(color);
      const newOpacityAppliedColor = `rgba(${rgbValue.red},${rgbValue.green},${rgbValue.blue},${opacity})`;
      // console.log("newOpacityAppliedColor : ", newOpacityAppliedColor);
      setCurrentColor(newOpacityAppliedColor);
    }
    setPickerAttributes({ ...pickerAttributes, hex: color });
    setVisitedColors([...visitedColors, color]);
  }

  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
    const newOpacity = event.target.value;
    setOpacity(newOpacity);
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
    // console.log("mostRecentColorLoadCount : ", mostRecentColorLoadCount);
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
              <GithubColorSquare onClick={(e) => handleColorChoice(color, e)} style={{ borderRadius: `${borderRadius}` }} key={index} background={color} />
            )
          })
        }
      </GithubColorsWrapper>

      {/* <OpacitySlider> */}
      <OpacitySlider id="range" type="range" step="0.01" min="0" max="1" onChange={handleOpacityChange} value={opacity} />
      {/* </OpacitySlider> */}

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
                  <AddRecentColor onClick={() => handleLoadMostRecentColor()} key={index} background={color}>
                    +
                  </AddRecentColor>
                )
              else
                return (
                  <ColorCircle onClick={(e) => handleColorChoice(color, e)} key={index} background={color} />
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
// .attrs(props => ({
//   style: {
//     background: props.colorChosen,
//   },
// }))
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
    background-color: rgb(131, 122, 122);
    background-image:
        linear-gradient(45deg, #ccc 25%, transparent 25%),
        linear-gradient(-45deg, #ccc 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #ccc 75%),
        linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 5px 5px;
    background-position: 0 0, 0 2.5px, 2.5px -2.5px, -2.5px 0px;
    margin:10px 0 12px 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 15px;
        width: 15px;
        background-color: rgb(80, 78, 77);
        border-radius: 50%;
        border: 5px solid white;
        transition: .2s ease-in-out;
    }

    &::-moz-range-thumb {
        height: 18px;
        width: 18px;
        background-color: rgb(80, 78, 77);
        border-radius: 50%;
        border: 4px solid rgb(255, 255, 255);
        transition: .2s ease-in-out;
    }
  `;

const GithubColorSquare = styled.span`
  width: 23.25px;
  height: 22.5px;
  background: ${(props) => props.background};
  border:1px solid ${(props) => props.background};
  &:hover{
    border:1px solid white;
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
  gap:10px 20.5px;
    `;

const AddRecentColor = styled.div`
  width: 23px;
  height: 23px;
  background: ${(props) => props.background};
  border:1px solid ${(props) => props.background};
  color:rgba(60, 60, 67, 0.6);
  border-radius:50%;
  &:hover{
    cursor:pointer;
    background: rgba(0, 0, 0, 0.55);
    border:1px solid rgba(0, 0, 0, 1);
    color:rgba(0, 0, 0, 1);
  }

  // >p{
  //   position:absolute;
  //   z-index:2;
  //   top:622px;
  //   left:564px;
  //     color:rgba(60, 60, 67, 0.6);
  //   font-size:40px;
  // }
  // > .MuiSvgIcon-root {
  //   color:rgba(60, 60, 67, 0.6);
  //   border-radius:50%;
  //   background: ${(props) => props.background};
  //   border:1px solid ${(props) => props.background};
  //   &:hover{
  //     cursor:pointer;
  //   }
  //   font-size:28px;
  // }
`;

const ColorCircle = styled.span`
  width: 25px;
  height: 25px;
  background: ${(props) => props.background};
  border-radius:50%;
  &:hover{
    cursor:pointer;
    box-shadow: inset 0 0 0 3px ${(props) => props.background},inset 0 0 0 5px white;
  }
`;

// const Swatch = styled.div`
//   padding: 5px;
//   background: #fff;
//   border-radius: 1px;
//   box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
//   display: inline - block;
//   cursor: pointer;
// `;

// const Popover = styled.div`
//   position: absolute;
//   z - index: 2;
//   bckground-color:blue;
//   paddding:20px;
//   width:3000px;
// `

// const Cover = styled.div`
//   position: fixed;
//   top: 0px;
//   right: 0px;
//   bottom: 0px;
//   left: 0px;
// `


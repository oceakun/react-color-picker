import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { FormatValuesContext } from "../contexts/FormatValuesContext";
import { LabelInputContext } from "../contexts/LabelInputContext";

function LabelInput() {
  const { formatValues, setFormatValues } = useContext(FormatValuesContext);
  const { label, setLabel } = useContext(LabelInputContext);
  const [currentLabel, setCurrentLabel] = useState(label);

  useEffect(() => {
    setLabel(currentLabel);
  }, [currentLabel]);

  useEffect(() => {
    console.log("formatValues : ", formatValues);
    const newLabel = buildCustomText(currentLabel);
    setCurrentLabel(newLabel);
  }, [formatValues]);

  const handleFontFamilyChange = (e) => {
    e.preventDefault();
    const newLabel = buildCustomText(e.target.value);
    setCurrentLabel(newLabel);
  };

  const buildCustomText = (oldText) => {
    if (formatValues.wordStyle === "TT") {
      return oldText.toUpperCase();
    } else if (formatValues.wordStyle === "tt") {
      return oldText.toLowerCase();
    } else {
      return oldText
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }
  };

  return (
    <InputLabelHere
      value={currentLabel}
      onChange={(e) => handleFontFamilyChange(e)}
      fontFamily={formatValues.fontFamily}
      fontSize={formatValues.fontSize}
      fontStyle={formatValues.fontStyle}
    />
  );
}

export default LabelInput;

const InputLabelHere = styled.input`
  font-size: ${(props) => props.fontSize + "px"};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => (props.fontStyle === "B" ? "bold" : "light")};
  font-style: ${(props) => (props.fontStyle === "I" ? "italic" : "normal")};
  width: 380px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid #d9d9d999;
  background: transparent;
  color: #a6a6a6;
  &:focus {
    border: none;
  }
`;

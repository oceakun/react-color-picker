import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { FormatValuesContext } from "../../contexts/FormatValuesContext";
import LabelInput from "../LabelInput";

function Formatters() {
  const { formatValues, setFormatValues } = useContext(FormatValuesContext);
  const [currentFormatValues, setCurrentFormatValues] = useState({
    ...formatValues,
  });

  useEffect(() => {
    // console.log("currentFormatValues ; ", currentFormatValues);
    setFormatValues(currentFormatValues);
  }, [currentFormatValues]);

  useEffect(() => {
    // console.log("formatValues ; ", formatValues);
  }, [formatValues]);

  const handleFontFamilyChange = (e) => {
    e.preventDefault();
    setCurrentFormatValues({
      ...currentFormatValues,
      fontFamily: e.target.value,
    });
  };
  const handleFontSizeChange = (e, op) => {
    e.preventDefault();
    if (op == "+") {
      setCurrentFormatValues({
        ...currentFormatValues,
        fontSize: currentFormatValues.fontSize + 1,
      });
    } else {
      setCurrentFormatValues({
        ...currentFormatValues,
        fontSize: currentFormatValues.fontSize - 1,
      });
    }
  };

  const handleFontStyleChange = (e, style) => {
    e.preventDefault();
    setCurrentFormatValues({
      ...currentFormatValues,
      fontStyle: style,
    });
  };

  const handleWordStyleChange = (e, style) => {
    e.preventDefault();
    setCurrentFormatValues({
      ...currentFormatValues,
      wordStyle: style,
    });
  };

  return (
    <>
      <FormattersContainer>
        <FormattingOptions>
          <FontSelector onChange={(e) => handleFontFamilyChange(e)}>
            <FontOptions>Manrope</FontOptions>
            <FontOptions>TimesNewRoman</FontOptions>
            <FontOptions>cursive</FontOptions>
            <FontOptions>system-ui</FontOptions>
            <FontOptions>sans-serif</FontOptions>
          </FontSelector>
          <Seperator>|</Seperator>

          <ChangeSize onClick={(e) => handleFontSizeChange(e, "+")}>
            +
          </ChangeSize>
          <SizeValue>{currentFormatValues.fontSize}</SizeValue>
          <ChangeSize onClick={(e) => handleFontSizeChange(e, "-")}>
            -
          </ChangeSize>
          <Seperator>|</Seperator>

          <FontStyle
            onClick={(e) => handleFontStyleChange(e, "B")}
            chosen={currentFormatValues.fontStyle === "B" ? true : false}
          >
            B
          </FontStyle>
          <FontStyle
            onClick={(e) => handleFontStyleChange(e, "I")}
            chosen={currentFormatValues.fontStyle === "I" ? true : false}
            style={{ fontStyle: "italic", fontFamily: "TimesNewRoman" }}
          >
            I
          </FontStyle>
          <Seperator>|</Seperator>

          <WordStyle
            onClick={(e) => handleWordStyleChange(e, "TT")}
            chosen={currentFormatValues.wordStyle === "TT" ? true : false}
          >
            TT
          </WordStyle>
          <WordStyle
            onClick={(e) => handleWordStyleChange(e, "Tt")}
            chosen={currentFormatValues.wordStyle === "Tt" ? true : false}
          >
            Tt
          </WordStyle>
          <WordStyle
            onClick={(e) => handleWordStyleChange(e, "tt")}
            chosen={currentFormatValues.wordStyle === "tt" ? true : false}
          >
            tt
          </WordStyle>
        </FormattingOptions>
        <DemoInput>
          <LabelInput />
        </DemoInput>
      </FormattersContainer>
    </>
  );
}

export default Formatters;

const FormattersContainer = styled.div`
  
  border-radius: 3px;
  margin-left:10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const FormattingOptions = styled.div`
  width: 387px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  background: white;
`;

const DemoInput = styled.div`
  background: white;
  width: 387px;
  height: 32px;
`;

const FontSelector = styled.select`
  width: 88px;
  height: 28px;
  border-radius: 3px;
  background: #d9d9d933;
  border: none;
  color: #a6a6a6;
`;

const FontOptions = styled.option`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 88px;
  height: 28px;
  background: #d9d9d933;
  border: none;
  color: #a6a6a6;

  &:hover {
    background: #d9d9d933;
    border: none;
    color: #a6a6a6;
  }
`;

const Seperator = styled.div`
  color: rgba(166, 166, 166, 0.6);
`;

const ChangeSize = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  color: #a6a6a6;
  background: #d9d9d933;
  text-align: center;
  &:hover {
    cursor: pointer;
    background: #a6a6a6;
    color: #f4f4f4;
  }
`;

const SizeValue = styled.div`
  color: #a6a6a6;
  width: 24px;
  text-align: center;
`;

const FontStyle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  color: ${(props) => (props.chosen ? "#f4f4f4" : "#a6a6a6")};
  background: ${(props) => (props.chosen ? "#a6a6a6" : "#f4f4f4")};
  text-align: center;
  &:hover {
    cursor: pointer;
    background: #a6a6a6;
    color: #f4f4f4;
  }
`;

const WordStyle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  color: ${(props) => (props.chosen ? "#f4f4f4" : "#a6a6a6")};
  background: ${(props) => (props.chosen ? "#a6a6a6" : "#f4f4f4")};
  text-align: center;
  &:hover {
    cursor: pointer;
    background: #a6a6a6;
    color: #f4f4f4;
  }
`;

import { useContext, useState } from "react";
import {
  AnnotationLabel,
  AnnotationCalloutCurve,
  ConnectorEndArrow,
  EditableAnnotation,
  ConnectorCurve,
  Note,
  NoteCircle,
  Annotation,
  SubjectCircle,
  ConnectorElbow,
  ConnectorEndDot,
} from "react-annotation";
import styled from "styled-components";
import { AnnotationsArrayContext } from "../../contexts/AnnotationsArrayContext";
import { LabelInputContext } from "../../contexts/LabelInputContext";
import "./BasicAnnotations.css";

const BasicAnnotations = () => {
  const { label, setLabel } = useContext(LabelInputContext);
  const { annotationsArray, setAnnotationsArray } = useContext(
    AnnotationsArrayContext
  );
  console.log("annotationsArray : ", annotationsArray);
  const x = 100;
  const y = 50;

  const handleAnnotationClick = (events) => {
    console.log("events : ", events);
  };

  // const handleLabelChange = (e) => {
  //   const newLabel = e.target;
  //   console.log("newLabel : ", newLabel.value);
  //   setLabel(newLabel.value);
  // };

  return (
    <>
      {/* <LabelInput
        value={label}
        onChange={(e) => handleLabelChange(e)}
      ></LabelInput> */}

      <AnnotationsContainer1>
        {/* <AnnotationLabel
          x={40}
          y={32}
          dy={67}
          dx={142}
          color={"#9610ff"}
          editMode={true}
          note={{
            title: "Annotations",
            label: "here goes the text",
            padding: 15,
            lineType: "vertical",
            align: "middle",
          }}
          subject={{
            width: 150,
            height: 100,
          }}
          // connector={{ end: "dot", type: "elbow", scale: "5" }}
        /> */}
        <AnnotationLabel
          x={450}
          y={52}
          dy={0}
          dx={142}
          color={"blue"}
          className="show-bg"
          editMode={true}
          events={{
            onClick: handleAnnotationClick,
          }}
          note={{
            // title: "Annotations :)",
            label: label,
            align: "middle",
            orientation: "leftRight",
            size: 20,
            bgPadding: 20,
            padding: 15,
            titleColor: "#59039c",
          }}
          connector={{ type: "line", end: "dot" }}
        />
      </AnnotationsContainer1>

      {/* <AnnotationsContainer2>
        <EditableAnnotation
          x={40}
          y={32}
          dy={67}
          dx={142}
          color={"#9610ff"}
          title={"Annotations"}
          label={label}
          subject={{
            width: 350,
            height: 400,
          }}
          events={{
            onClick: handleAnnotationClick,
          }}
        >
          <input placeholder="rhyr"/>
          <ConnectorCurve>
            <ConnectorEndArrow scale="5" />
          </ConnectorCurve>
          <Note lineType={"vertical"} />
        </EditableAnnotation>
      </AnnotationsContainer2> */}

      {/* <AnnotationsContainer3>
        <Annotation
          x={x}
          y={y}
          dx={100}
          dy={50}
          radius={35}
          color={"blue"}
          title="Custom annotation"
          label="Donut annotations be free!"
          events={{
            onClick: (props, state, event) => {
              console.log(props, state, event);
            },
          }}
        >
          <SubjectCircle />
          <ConnectorElbow>
            <ConnectorEndDot />
          </ConnectorElbow>
          {circle}
          <Note align="middle" lineType="vertical" padding={10} />
        </Annotation>
      </AnnotationsContainer3> */}
    </>
  );
};

export default BasicAnnotations;

const AnnotationsContainer1 = styled.svg`
  margin-top: 104px;
  // margin-left: 410px;
  width: 750px;
  height: 400px;
  // background: rgba(0, 0, 256, 0.2);
  position: absolute;
  z-index: 5;
`;

const LabelInput = styled.input`
  position: absolute;
  z-index: 6;
`;

const AnnotationsContainer2 = styled.svg`
  margin-top: 10px;
  margin-left: 50px;
  background: rgba(0, 0, 256, 0.2);
  position: absolute;
  z-index: 5;
`;

const AnnotationsContainer3 = styled.svg`
  margin-top: 10px;
  margin-left: 50px;
  background: rgba(0, 0, 256, 0.2);
  position: absolute;
  z-index: 5;
`;

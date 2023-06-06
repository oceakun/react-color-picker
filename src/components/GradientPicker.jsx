import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function GradientPicker(props) {

    const [currentPost, setCurrentPost] = useState();
    const [dropperSelected, setDropperSelected] = useState();
    const [dropperColorAndPost, setDropperColorAndPost] = useState([{ post: "0", color: "rgba(16,16,16,0)" }, { post: "100", color: "rgba(16,16,16,1)" }]);
    const [gradientString, setGradientString] = useState("rgba(16,16,16,0) 0%,rgba(16,16,16,1) 100%");

    useEffect(() => {

        const gradientValuesArray = [];
        const oldDropperColorAndPostList = [...dropperColorAndPost];

        oldDropperColorAndPostList.map((shade, i) => {
            if (shade.color != "") {
                const subString = `${shade.color} ${shade.post}%`;
                gradientValuesArray.push(subString);
            }
        });

        const gradientString = gradientValuesArray.join();
        console.log("gradientString (output): ", gradientString);
        setGradientString(gradientString);
        
        props.setGradientPicked(gradientString);
    }, [dropperColorAndPost]);

    const handleDropperPosition = (event) => {
        const newPost = event.target.value;
        const newDropperObject = { post: newPost, color: "" };
        const oldDropperColorAndPostList = [...dropperColorAndPost];
        const newDropperColorAndPostList = arrangeDroppers(newDropperObject, oldDropperColorAndPostList);
        console.log("newDropperColorAndPostList : ", newDropperColorAndPostList);
        setDropperColorAndPost(newDropperColorAndPostList);
    }

    const handleAddAColor = () => {
        if (props.color == null) {
            console.log("no color picked yet");
            return;
        }
        if (dropperSelected == null) {
            console.log("no dropper selected");
            return;
        }

        const dropperPosition = dropperSelected;
        const dropperColor = props.color;

        const newDropperColorAndPost = [...dropperColorAndPost];

        newDropperColorAndPost.map((dropper, index) => {
            if (index == dropperPosition) {
                dropper.color = dropperColor;
            }
        })

        setDropperColorAndPost(newDropperColorAndPost);
    }

    const handleDeleteAColor = () => {
        if (dropperSelected === undefined) {
            console.log("no dropper selected");
            return;
        }

        const removeIndex = dropperSelected;
        const deepCopyDropperColorAndPost = [...dropperColorAndPost];
        deepCopyDropperColorAndPost.splice(removeIndex, 1);
        setDropperColorAndPost(deepCopyDropperColorAndPost);

    }

    const handleDropperSelection = (dropper, e) => {
        const feedThisDropper = dropper;
        setDropperSelected(feedThisDropper);
    }

    const arrangeDroppers = (newDropperObject, oldDropperColorAndPostList) => {

        console.log("arrangeDroppers, oldDropperColorAndPostList : ", oldDropperColorAndPostList);

        if (+newDropperObject.post > +oldDropperColorAndPostList[oldDropperColorAndPostList.length - 1].post) {
            console.log("newDropperObject.post > oldDropperColorAndPostList[oldDropperColorAndPostList.length - 1].post");
            oldDropperColorAndPostList.push(newDropperObject);
            return oldDropperColorAndPostList;
        }

        for (let i = 0; i < oldDropperColorAndPostList.length - 1; i++) {
            console.log("oldDropperColorAndPostList : ", oldDropperColorAndPostList[i]);
            if (+newDropperObject.post < +oldDropperColorAndPostList[i + 1].post) {
                console.log("making insertion at index ", i + 1);
                oldDropperColorAndPostList.splice(i + 1, 0, newDropperObject);
                break;
            }
        }

        console.log("arrangeDroppers, oldDropperColorAndPostList : ", oldDropperColorAndPostList);

        return oldDropperColorAndPostList;
    }

    return (
        <LinearGradientConfigOptionsWrapper>
            <DropperContainer>
                {
                    dropperColorAndPost.map((dropper, index) => {
                        return (
                            <Dropper key={index} paddingLeft={dropper.post} backgroundColor={dropper.color} onClick={(event) => handleDropperSelection(index, event)}></Dropper>
                        )
                    })
                }
            </DropperContainer>
            <GradientSlider type="range" step="0.01" min="1" max="100" onChange={handleDropperPosition} value={currentPost} background={gradientString}></GradientSlider>

            <ChosenColorTextualDetails>
                <AddAColor onClick={() => handleAddAColor()}>
                    <AddIcon />
                    <span>add a color</span>
                </AddAColor>
                <DeleteAColor onClick={() => handleDeleteAColor()}>
                    <DeleteOutlineIcon />
                    <span>delete a color</span>
                </DeleteAColor>
            </ChosenColorTextualDetails>

        </LinearGradientConfigOptionsWrapper>
    )
}

export default GradientPicker

const LinearGradientConfigOptionsWrapper = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  gap:10px;
  margin-top:25px;
`;

const DropperContainer = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
  margin-left:-317px;
`;

const Dropper = styled.span`
width:15px;
height:15px;
margin-left: calc(${(props) => props.paddingLeft}px*2.97);
background:${(props) => props.backgroundColor};
position:absolute;
z-index:2;
border:4px solid white;
border-radius:50%;
box-shadow: 0 0 0 1px #DCDCDC;

&::after{
    content: "";
    position: absolute;
    margin-left: -1.5em;
    bottom: -12px;
    left: 24.5px;
    border: 5px solid black;
    border-color: transparent transparent white white;
    transform-origin: 0 0;
    transform: rotate(-45deg);
}

&:hover{
    cursor:pointer;
    box-shadow: 0 0 4px 1px #DCDCDC;;
}

&:active{
    cursor:pointer;
    box-shadow: 0 0 4px 1px black;
}
`;

const GradientSlider = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 303px;
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    height: 7px;
    background-color: rgb(131, 122, 122);
    background-image:
        linear-gradient(90deg, ${(props) => props.background});
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
    }

    &::-moz-range-thumb {
        display:none;
        height: 18px;
        width: 18px;
        background-color: transparent;
        border: none;
    }

  `;


const ChosenColorTextualDetails = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  gap:17px;
  margin:10px 0;
`;

const AddAColor = styled.div`
    color:#A6A6A6;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    align-items:center;
    gap:3px;
    box-sizing: border-box;
    height: 28px;
    border: 1px solid rgba(58, 135, 253, 0.38);
    border-radius: 6px;
    padding:12px;
    &:hover{
        cursor:pointer;
        border: 1px solid rgba(58, 135, 253, 0.78);
        color:#4f4f4f;
    }
  `;

const DeleteAColor = styled.div`
    color:#A6A6A6;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    align-items:center;
    gap:3px;
    box-sizing: border-box;
    height: 28px;
    border: 1px solid rgba(58, 135, 253, 0.38);
    border-radius: 6px;
    padding:12px;
    &:hover{
        cursor:pointer;
        border: 1px solid rgba(58, 135, 253, 0.78);
        color:#4f4f4f;
    }
`;
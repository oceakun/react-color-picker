import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Draggable from 'react-draggable';
import hexRgb from 'hex-rgb';

function ShadePicker(props) {

    const [currentPost, setCurrentPost] = useState();
    const [dropperSelected, setDropperSelected] = useState();
    const [dropperShadowAndPost, setDropperShadowAndPost] = useState([{ post: "0", shadow: "#DCDCDC" }]);

    useEffect(() => {
        props.setShadesPicked(dropperShadowAndPost);
    }, [dropperShadowAndPost]);

    const handleDropperPosition = (event) => {
        const newPost = event.target.value;
        const newDropperObject = { post: newPost, color: "", shadow: "#0061FD" };
        const oldDropperShadowAndPostList = [...dropperShadowAndPost];

        oldDropperShadowAndPostList.map((dropper, index) => {
            dropper.shadow = "#DCDCDC";
        })

        const newDropperShadowAndPostList = arrangeDroppers(newDropperObject, oldDropperShadowAndPostList);

        let feedThisDropper;
        for (let i = 0; i < newDropperShadowAndPostList.length; i++) {
            if (newDropperShadowAndPostList[i] == newDropperObject) {
                feedThisDropper = i;
            }
        }

        setDropperSelected(feedThisDropper);
        setDropperShadowAndPost(newDropperShadowAndPostList);
    }

    const handleColorAddition = () => {
        const newDropperShadowAndPost = [...dropperShadowAndPost];

        if (newDropperShadowAndPost.length > 8) {
            return;
        }

        else if (newDropperShadowAndPost.length == 0) {
            const newDropper = { post: "0", shadow: "#DCDCDC" };
            newDropperShadowAndPost.push(newDropper);
        }

        else {
            const newPost = ((11.11*newDropperShadowAndPost.length)).toFixed(2);
            console.log("newPost : ", newPost);
            const newDropper = { post: `${newPost}`, shadow: "#DCDCDC" };
            newDropperShadowAndPost.push(newDropper);
        }

        console.log("after addition : ", newDropperShadowAndPost);

        setDropperShadowAndPost(newDropperShadowAndPost);
    }

    const handleColorDeletion = () => {
        if(dropperSelected==null)
        {
            console.log("select a dropper, for deletion");
            return;
        }
        
        const deepCopyDropperShadowAndPost = [...dropperShadowAndPost];
        let indexToBeRemoved;

        deepCopyDropperShadowAndPost.map((dropper, index) => {
            if (dropper.shadow == "#0061FD") {
                indexToBeRemoved = index;
            }
        })
        
        if(indexToBeRemoved!=null)
        deepCopyDropperShadowAndPost.splice(indexToBeRemoved, 1);

        console.log("after deletion : ", deepCopyDropperShadowAndPost);
        
        setDropperSelected(null);
        setDropperShadowAndPost(deepCopyDropperShadowAndPost);
    }

    const handleDropperSelection = (dropper, e) => {
        const feedThisDropper = dropper;

        const newDropperShadowAndPost = [...dropperShadowAndPost];

        newDropperShadowAndPost.map((dropper, index) => {
            if (dropper == feedThisDropper) {
                dropper.shadow = "#0061FD";
            }
            else {
                dropper.shadow = "#DCDCDC";
            }
        })
        setDropperShadowAndPost(newDropperShadowAndPost);

        setDropperSelected(feedThisDropper);
    }

    const arrangeDroppers = (newDropperObject, oldDropperShadowAndPostList) => {

        // if (+newDropperObject.post > +oldDropperShadowAndPostList[oldDropperShadowAndPostList.length - 1].post) {
        //     oldDropperShadowAndPostList.push(newDropperObject);
        //     return oldDropperShadowAndPostList;
        // }

        // for (let i = 0; i < oldDropperShadowAndPostList.length - 1; i++) {
        //     if (+newDropperObject.post < +oldDropperShadowAndPostList[i + 1].post) {
        //         oldDropperShadowAndPostList.splice(i + 1, 0, newDropperObject);
        //         break;
        //     }
        // }

        return oldDropperShadowAndPostList;
    }

    const handleDrag = (e, ui) => {
        const dropperIndex = ui.node.id;
        const addOpacity = ((ui.x / 303) * 100).toFixed(0);

        // console.log("ui : ", ui);
        // console.log("dropperSelected : ", dropperSelected);
        // console.log("ui.id : ", dropperIndex);
        // console.log("new opacity : ", addOpacity);

        const oldDropperShadowAndPostList = [...dropperShadowAndPost];

        oldDropperShadowAndPostList.map((dropper, index) => {
            if (index == dropperIndex) {
                dropper.post = addOpacity;
                // `${(parseInt(dropper.post) + parseInt(addOpacity).toFixed(2))}`;
            }
        })

        // console.log("oldDropperShadowAndPostList : ", oldDropperShadowAndPostList);

        setDropperShadowAndPost(oldDropperShadowAndPostList);
    };

    return (
        <LinearGradientConfigOptionsWrapper>
            <DropperContainer>
                {
                    dropperShadowAndPost.map((dropper, index) => {

                        const fromLeft = -3.03 * (Math.trunc(+dropper.post));
                        const fromRight = 3.03 * (Math.trunc(100 - (+dropper.post)));
                        // console.log("fromLeft : ", fromLeft);
                        // console.log("fromRight : ", fromRight);
                        const dropperBackgroundRgb = hexRgb(props.hexCodeForColorPicked);
                        // console.log("opacity : ", props.opacity);
                        const dropperBackgroundOpacity = (((+dropper.post) / 100) * (props.opacity)).toFixed(2);
                        const dropperBackground = `rgba(${dropperBackgroundRgb.red},${dropperBackgroundRgb.green},${dropperBackgroundRgb.blue}, ${dropperBackgroundOpacity})`;
                        // console.log("dropperBackground : ", dropperBackground);

                        return (
                            <Draggable key={index} axis="x" bounds={{ left: 0, right: 300, top: 0, bottom: 0 }} defaultPosition={{ x: (dropper.post) * 1, y: 0 }} onDrag={handleDrag}>
                                <Dropper key={index} id={index} backgroundColor={dropperBackground} onClick={(event) => handleDropperSelection(dropper, event)} shadowColor={dropper.shadow} zIndex={index + 1}>
                                </Dropper>
                            </Draggable>
                        )
                    })
                }

            </DropperContainer>
            <GradientSlider disable={true} type="range" step="0.01" min="0" max="100" onInput={handleDropperPosition} value={currentPost} borderColor={props.hexCodeForColorPicked} background={props.gradientForShadePicker}></GradientSlider>

            <ChosenColorTextualDetails>
                <AddAColor onClick={() => handleColorAddition()}>
                    <AddIcon />
                    <span>add a color</span>
                </AddAColor>
                <DeleteAColor onClick={() => handleColorDeletion()}>
                    <DeleteOutlineIcon />
                    <span>delete a color</span>
                </DeleteAColor>
            </ChosenColorTextualDetails>

        </LinearGradientConfigOptionsWrapper>
    )
}

export default ShadePicker

const LinearGradientConfigOptionsWrapper = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  gap:10px;
  margin-top:10px;
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
box-shadow: 0 0 2px 1px  ${(props) => props.shadowColor};

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
    box-shadow: 0 0 2px 1px ${(props) => props.shadowColor};
    // box-shadow: 0 0 2px 1px #0061FD;
}

// &:active{
//     cursor:pointer;
//     box-shadow: 0 0 4px 1px black;
// }
`;

const GradientSlider = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 303px;
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    height: 7px;
    background-color: white;
    background-image: linear-gradient(90deg, ${(props) => props.background});
    border:1px solid  ${(props) => props.borderColor};
    pointer-events:none;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 18px;
        width: 18px;
        background-color: transparent;
        border: none;
        border-radius:5px;
    }

    &::-moz-range-thumb {
        -moz-appearance: none;
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
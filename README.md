# react-color-picker

## `<Picker>`

---

The `<Picker>` component wraps the shade picker and color picker in a seperate container, while adding a header which contains the heading 'Colors' and a button to close an opened picker.

**Picker Usage**

     <Picker
     setHexCodeForMainColor={setHexCodeForMainColor}
     setShades={setShades}
     visibility={pickerVisibility}
     setPickerVisibility={setPickerVisibility}
     opacity={opacity}
     setOpacity={setOpacity}
     />

**`<Picker>` Props:**

    //takes the setter function for the hex-code of the main color
    setHexCodeForMainColor={}

    //takes the setter function for the 'shades' state, which contains a list of position of pins on the horizontal bar
    setShades={}

    //takes the setter function for visibility of picker
    setPickerVisibility={}

    //takes the setter function for opacity
    setOpacity={}

    //signifies whether the color picker's visibility property in CSS is set to 'visible' or 'hidden'
    visibility={}

    //takes the state which holds the current value of opacity
    opacity={}

## `<SolidPicker>`

---

The `<SolidPicker>` component encapsulates three features, which are,

- a 10x12 matrix of colors to choose main color from
- an opacity slider which can be used to set the opacity of the main color, used wherever inside the picker
- a culmination of the recently used colors and the ability to keep updating them manually

**SolidPicker Usage**

    <SolidPicker
    setHexCodeForMainColor={setHexCodeForMainColor}
    setColorPicked={setColorPicked}
    setOpacity={props.setOpacity}
    />

**`<SolidPicker>` Props:**

    //takes the setter function for the hex code of main color
    setHexCodeForMainColor={}

    //takes the setter function for the RGBA code of main color
    setColorPicked={}

    //takes the setter function for opacity
    setOpacity={}

## `<ShadePicker>`

---

The `<ShadePicker>`, essentially provisions the selection of at most 9 shades of the main color. To update the palette of chosen shades, two buttons 'add a color' and 'delete a color' are also provided. In addition, the pins can also be moved horizontally on a bar to select shades of different opacity (0 to 1).

**ShadePicker Usage**

    <ShadePicker
    gradientForShadePicker={gradientForShadePicker} hexCodeForMainColor={hexCodeForMainColor}
    setShadesPicked={setShadesPicked}
    color={colorPicked}
    opacity={props.opacity}
    />

**`<ShadePicker>` Props:**

    //takes the state which holds the gradient for the horizontal bar in shade-picker
    gradientForShadePicker={}

    //takes the state which holds the hex-code of the main color
    hexCodeForMainColor={}

    //takes the setter function for the 'shades' state, which contains a list of position of pins on the horizontal bar
    setShades={}

    //takes the state which holds the RGBA code of main color
    color={}

    //takes the state which holds the current value of opacity
    opacity={}

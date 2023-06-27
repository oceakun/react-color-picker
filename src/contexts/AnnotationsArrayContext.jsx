import { createContext, useState } from "react";

export const AnnotationsArrayContext = createContext();

export const AnnotationsArrayContextProvider = ({children}) => {
  const [annotationsArray, setAnnotationsArray] = useState([
    {
      id: "0",
      x: 90,
      y: 0,
      dx: 0,
      dy: 0,
      color: "",
      labelStyle: "",
      labelSize: "",
          labelFontFamily: "",
      wordStyle:"",
      label: "",
    },
  ]);

  return (
    <AnnotationsArrayContext.Provider
      value={{ annotationsArray, setAnnotationsArray }}
    >
      {children}
    </AnnotationsArrayContext.Provider>
  );
};

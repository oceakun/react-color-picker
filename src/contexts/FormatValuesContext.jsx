import { createContext, useState } from "react";

export const FormatValuesContext = createContext();

export const FormatValuesContextProvider = ({ children }) => {
  const [formatValues, setFormatValues] = useState({
    fontFamily: "Manrope",
    fontSize: 18,
    fontStyle: "I",
    wordStyle: "Tt",
  });

  return (
    <FormatValuesContext.Provider value={{ formatValues, setFormatValues }}>
      {children}
    </FormatValuesContext.Provider>
  );
};

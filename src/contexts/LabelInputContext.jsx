import { createContext, useState } from "react";

export const LabelInputContext = createContext();

export const LabelInputContextProvider = ({ children }) => {
  const [label, setLabel] = useState("add annotation label here");

  return (
    <LabelInputContext.Provider value={{ label, setLabel }}>
      {children}
    </LabelInputContext.Provider>
  );
};

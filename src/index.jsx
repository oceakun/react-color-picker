import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnnotationsArrayContextProvider } from "./contexts/AnnotationsArrayContext";
import { LabelInputContextProvider } from "./contexts/LabelInputContext";
import { FormatValuesContextProvider } from "./contexts/FormatValuesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnnotationsArrayContextProvider>
    <LabelInputContextProvider>
      <FormatValuesContextProvider>
        <App />
      </FormatValuesContextProvider>
    </LabelInputContextProvider>
  </AnnotationsArrayContextProvider>
);

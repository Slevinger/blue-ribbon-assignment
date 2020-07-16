import React from "react";
import { Provider as TemplateProvider } from "../context/Template/templateContext";

import "./Main.css";

const App = () => {
  return (
    <TemplateProvider>
      <div className="App">Blue Ribbon</div>
    </TemplateProvider>
  );
};

export default App;

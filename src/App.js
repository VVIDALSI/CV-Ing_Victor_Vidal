import React from "react";
import stlApp from "./App.module.css"
import Card from "./components/card/Card"

function App() {
  return (
    <div className={stlApp.containerApp}>
      <Card/>      
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import ColorPicker from "./ColorPicker";
import PaintGrid from "./PaintGrid";
import ColorPreview from "./ColorPreview";
import { colors, PainterContext } from "../contexts/PainterContext";

function App() {
  // use state for color and setColor
  const [color, setColor] = React.useState(colors[0]);

  return (
    <div className="App container">
      <PainterContext.Provider value={{ colors, color, setColor }}>
        <h1 className='title'>Let´s paint!</h1>

        <ColorPreview />
        <div className='divgrupo'>
          <ColorPicker />
          <PaintGrid />
        </div>
      </PainterContext.Provider>
    </div>
  );
}

export default App;
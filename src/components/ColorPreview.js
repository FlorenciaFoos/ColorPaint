import React from "react";
import { PainterContext } from '../contexts/PainterContext';

function ColorPreview(props) {
  const { color } = React.useContext(PainterContext);

  return (
    <div className="colorPreview"><strong> Color seleccionado:</strong>  {color.name}</div>
  );
}

export default ColorPreview;

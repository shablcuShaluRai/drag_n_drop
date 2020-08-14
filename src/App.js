import React, { useState } from "react";
import "./App.css"

function App() {
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rel, setRel] = useState(null);
  const [dob, setDob] = useState(new Date())

  const onMouseDown = e => {
    if (e.button !== 0) return;
    const pos = document.body.getBoundingClientRect();
    setDragging(true);
    setRel({
      x: e.pageX - pos.left,
      y: e.pageY - pos.top,
    });
  };

  const onMouseUp = () => {
    setDragging(true);
  };

  const onMouseMove = e => {
    if (dragging) {
      setPos({
        x: e.pageX - rel.x,
        y: e.pageY - rel.y,
      });
    }
  };

  const setDobToNow = () => {
    setDob(new Date())
  };
  return (
    <div className="app">
      <div
        className="card"
        style={{
          position: "absolute",
          left: pos.x + "px",
          top: pos.y + "px",
        }}
        draggable
        onDragStart={onMouseDown}
        onDragEnter={onMouseMove}
        onDragEnd={onMouseUp}
      >
        <div className="header">
            <span>Earth-616</span>
            <span>S.H.I.E.L.D.</span>
            <span>678-136-7092</span>
        </div>
        <div className="name">Capt. Steve Rogers</div>
        <div className="dob" onClick={setDobToNow}>{dob.toLocaleString()}</div>
        <div className="margin-30">Stark Industries</div>
        <div className="margin-30">Avengers Facility, Upstate, New York</div>
      </div>
    </div>
  );
}
export default App;

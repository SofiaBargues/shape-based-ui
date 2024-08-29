import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

function App() {
  return (
    <>
      <div>hello</div>
      {BOX_DATA.map((row) => (
        <div>
          {row.map((cell) => (
            <div className="border-2 border-black h-10 w-10">{cell}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;

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
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const rowLength = BOX_DATA[0].length;

  return (
    <>
      <div>hello</div>
      {BOX_DATA.map((row, i) => (
        <div className="flex">
          {row.map((cell, j) => {
            if (cell === 1) {
              const mainIndex = i * rowLength + j;
              return (
                <button
                  onClick={() => {
                    const arrIsClicked = [...isClicked];
                    arrIsClicked.push(mainIndex);
                    setIsClicked(arrIsClicked);
                    console.log(mainIndex);
                  }}
                  className={"border-2 border-black h-10 w-10"}
                >
                  {mainIndex}
                </button>
              );
            } else {
              return (
                <div className={"border-2 h-10 w-10 border-transparent "}></div>
              );
            }
          })}
        </div>
      ))}
    </>
  );
}

export default App;

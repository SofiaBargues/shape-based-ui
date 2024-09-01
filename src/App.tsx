import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

function App() {
  const [numsClicked, setNumsClicked] = useState<number[]>([]);
  // necesito una variable booleana que sepa si ha sido completadp o no el patron
  const [completed, isCompleted] = useState(false);
  const rowLength = BOX_DATA[0].length;

  //doble forloop para saber el largo ( canftidad de cajaas con UNOS )
  let boxNum = 7;

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (numsClicked.length > 0 && completed == true) {
        setNumsClicked(numsClicked.slice(1));
      }
    }, 19000 / 100);
    return () => clearTimeout(timeId);
  }, [completed, numsClicked]);

  return (
    <>
      {BOX_DATA.map((row, i) => (
        <div className="flex">
          {row.map((cell, j) => {
            if (cell === 1) {
              const mainIndex = i * rowLength + j;
              return (
                <button
                  onClick={() => {
                    const arrIsClicked = [...numsClicked];
                    arrIsClicked.push(mainIndex);
                    setNumsClicked(arrIsClicked);
                    isCompleted(arrIsClicked.length === boxNum);
                    console.log(mainIndex);
                  }}
                  className={
                    "border-2  border-black h-10 w-10 " +
                    (numsClicked.includes(mainIndex) ? "bg-lime-700" : "")
                  }
                  disabled={numsClicked.includes(mainIndex)}
                >
                  {/* {mainIndex} */}
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

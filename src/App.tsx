import { useEffect, useState } from "react";
import "./App.css";
const BOX_DATA = [
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

function App() {
  const [numsClicked, setNumsClicked] = useState<number[]>([]);
  // necesito una variable booleana que sepa si ha sido completadp o no el patron
  const [completed, setCompleted] = useState(false);
  const rowLength = BOX_DATA[0].length;

  //doble forloop para saber el largo ( canftidad de cajaas con UNOS )

  let sum = 0;
  for (let i = 0; i < BOX_DATA.length; i++) {
    for (let j = 0; j < BOX_DATA[i].length; j++) {
      sum += BOX_DATA[i][j];
    }
  }
  const boxNum = sum;

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (numsClicked.length === 0) {
        setCompleted(false);
      } else if (numsClicked.length > 0 && completed == true) {
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
                    setCompleted(arrIsClicked.length === boxNum);
                    console.log(mainIndex);
                  }}
                  className={
                    "border-2  border-black h-10 w-10 " +
                    (numsClicked.includes(mainIndex) ? "bg-lime-700" : "")
                  }
                  disabled={
                    numsClicked.includes(mainIndex) || completed === true
                  }
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

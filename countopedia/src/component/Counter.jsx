import { useState } from "react";
import attactImg from "../images/attack.png";
import defencImg from "../images/defend.png";
function Counter() {
  const [counter, setCounter] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const handleIncrement = () => {
    setGameStatus("");
    setCounter(counter + 1);
    if (counter >= 5) {
      setGameStatus("You Win the game");
    }
  };
  const handleDecrement = () => {
    setGameStatus("");
    setCounter(counter - 1);
    if (counter <= -1) {
      setGameStatus("You lose the game");
    }
  };
  const handleRandomPlay = () => {
    const randomValue = Math.round(Math.random());
    if (randomValue === 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  };
  const handleRest = () => {
    setCounter(0);
    setGameStatus("");
  };
  return (
    <>
      <div className="container">
        <div className="row text-white text-center">
          <h1>Game Score: {counter}</h1>
          <p>You win at +5 poisnts and lose at -5 points</p>
          <h3>Game Status: {gameStatus}</h3>
          <div className="col-6 col-md-3 offset-md-3">
            <img
              src={attactImg}
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid green",
              }}
              className="p-4 rounded"
              onClick={handleIncrement}
            ></img>
          </div>
          <div className="col-6 col-md-3 offset-md-3">
            <img
              src={defencImg}
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid red",
              }}
              className="p-4 rounded"
              onClick={handleDecrement}
            ></img>
          </div>
          <div className="col-12 col-md-4 offset-md-4">
            <button
              onClick={handleRandomPlay}
              className="btn btn-success mt-2 w-100"
            >
              Random Play
            </button>
            <button onClick={handleRest} className="btn btn-danger mt-2 w-100">
              Rest
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

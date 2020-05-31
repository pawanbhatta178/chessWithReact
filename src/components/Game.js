import React, { useState } from "react";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const color = [];

  const positions = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const position = {
        x: i,
        y: j,
      };
      if (position.x % 2 === 0) {
        if (position.y % 2 === 0) {
          color.push("black");
        } else {
          color.push("white");
        }
      } else {
        if (position.y % 2 === 0) {
          color.push("white");
        } else {
          color.push("black");
        }
      }

      positions.push(position);
    }
  }

  const [board, setBoard] = useState(positions);
  const [shade, setShade] = useState(false);
  const [turn, setTurn] = useState("black");
  const [clicks, setClicks] = useState({ firstClick: "", secondClick: "" });
  const [configuration, setConfig] = useState({
    config: [
      [0, "Rook", "black", "br1"],
      [1, "Knight", "black", "bh1"],
      [2, "Bishop", "black", "bb1"],
      [3, "Queen", "black", "bq1"],
      [4, "King", "black", "bk1"],
      [5, "Bishop", "black", "bb2"],
      [6, "Knight", "black", "bh2"],
      [7, "Rook", "black", "br2"],
      [8, "Pawn", "black", "bp1"],
      [9, "Pawn", "black", "bp2"],
      [10, "Pawn", "black", "bp3"],
      [11, "Pawn", "black", "bp4"],
      [12, "Pawn", "black", "bp5"],
      [13, "Pawn", "black", "bp6"],
      [14, "Pawn", "black", "bp7"],
      [15, "Pawn", "black", "bp8"],
      [48, "Pawn", "white", "wp1"],
      [49, "Pawn", "white", "wp2"],
      [50, "Pawn", "white", "wp3"],
      [51, "Pawn", "white", "wp4"],
      [52, "Pawn", "white", "wp5"],
      [53, "Pawn", "white", "wp6"],
      [54, "Pawn", "white", "wp7"],
      [55, "Pawn", "white", "wp8"],
      [56, "Rook", "white", "wr1"],
      [57, "Knight", "white", "wh1"],
      [58, "Bishop", "white", "wb1"],
      [59, "Queen", "white", "wq1"],
      [60, "King", "white", "wk1"],
      [61, "Bishop", "white", "wb2"],
      [62, "Knight", "white", "wh2"],
      [63, "Rook", "white", "wr2"],
    ],
  });

  /*const selectPiece = (i) => {
    const { config } = configuration;
    let clickedOnPiece = null;
    const selectedPiece = config.map((conf) => {
      if (conf[0] === i && conf[2] === turn) {
        conf[4] = true;
        clickedOnPiece = i;
      }
      return conf;
    });
    console.log(selectedPiece);
    return clickedOnPiece;
  };
  */
  const clickable = (index) => {
    let clicked = configuration.config.filter((conf) => {
      return conf[0] === index && conf[2] === turn;
    });

    if (clicked.length > 0) {
      return clicked[0][0];
    } else {
      return null;
    }
  };

  const validateSecondClick = (index) => {
    const new_array = configuration.config.map((conf) => {
      if (conf[0] === clicks.firstClick) {
        conf[0] = index; //move the item
      }
      return conf;
    });
    setConfig({ config: new_array }); //after the 2nd click is validated, we change the turn and remove the first and second clicks
    setClicks({ firstClick: "", secondClick: "" });
    if (turn == "black") {
      setTurn("white");
    } else {
      setTurn("black");
    }
  };

  const validMove = (index) => {
    return true;
  };

  const handleClick = (i) => {
    const first_click = clickable(i); //this should return index of valid click or null based on whether the piece is clikable (also considering the turn)
    if (first_click) {
      setClicks({ ...clicks, firstClick: first_click }); //setting valid click to first click
    }

    if (clicks.firstClick != "" && validMove(i)) {
      validateSecondClick(i);
    }
  };

  return (
    <>
      <Board
        squares={board}
        onClick={handleClick}
        color={color}
        configs={configuration.config}
      />
    </>
  );
};

export default Game;

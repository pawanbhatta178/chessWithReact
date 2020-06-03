import React, { useState } from "react";
import Board from "./Board";
const KingValidMoves = require("../movement/KingValidMoves");
const KnightValidMoves = require("../movement/KnightValidMoves");
const QueenValidMoves = require("../movement/QueenValidMoves");
const BishopValidMoves = require("../movement/BishopValidMoves");
const PawnBlackValidMoves = require("../movement/PawnBlackValidMoves");
const PawnWhiteValidMoves = require("../movement/PawnWhiteValidMoves");
const RookValidMoves = require("../movement/RookValidMoves");

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
  const [turn, setTurn] = useState("black");
  const [clicks, setClicks] = useState({ firstClick: "", secondClick: "" });
  const [selected, setSelected] = useState({ selected: "" });
  const [moves, setMoves] = useState([]);
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

  const FinalizeMove = (firstClick, secondClick, type, color) => {
    let possibleMoves = [];

    switch (type) {
      case "Knight":
        possibleMoves = KnightValidMoves(firstClick);
        break;
      case "King":
        possibleMoves = KingValidMoves(firstClick);
        break;
      case "Queen":
        possibleMoves = QueenValidMoves(firstClick);
        break;
      case "Bishop":
        possibleMoves = BishopValidMoves(firstClick);
        break;
      case "Rook":
        possibleMoves = RookValidMoves(firstClick);
        break;
      case "Pawn":
        if (color === "black") {
          possibleMoves = PawnBlackValidMoves(firstClick);
          break;
        } else {
          possibleMoves = PawnWhiteValidMoves(firstClick);
          break;
        }
    }

    const ans = possibleMoves.indexOf(secondClick) === -1 ? false : true;

    return ans;
  };

  const clickable = (index) => {
    let clicked = configuration.config.filter((conf) => {
      return conf[0] === index && conf[2] === turn;
    });

    if (clicked.length > 0) {
      return clicked[0];
    } else {
      return null;
    }
  };

  const validateSecondClick = (i) => {
    const possibleMoves = FinalizeMove(
      clicks.firstClick,
      i,
      selected.selected[1],
      selected.selected[2]
    );
    let newArrayWithUpdates = [...configuration.config];
    if (possibleMoves) {
      //which means the move is valid therefore we can proceed with the user's command
      //therefore we have to update the configuaration as per user's demand
      let deletable = false;
      newArrayWithUpdates.forEach((conf) => {
        if (conf[0] === i) {
          //which means there exists an entity in the destination. Therefore we delete that entity first.
          newArrayWithUpdates = newArrayWithUpdates.filter((configur) => {
            return configur[0] != conf[0];
          });
          //the deleted item doesnt exist anymore
          //now it is time to bring the piece to the destination which will be done by map
          console.log(configuration.config);
        }
      });
      const updatedConfig = newArrayWithUpdates.map((conf) => {
        if (conf[0] === clicks.firstClick) {
          conf[0] = i;
        }
        return conf;
      });
      console.log("jjjj");
      setConfig({ config: updatedConfig });
      if (turn === "white") {
        //change the turn only if the move is valid
        setTurn("black");
      } else {
        setTurn("white");
      }
      console.log(configuration.config);
    }
    setSelected({ selected: "" });
    setClicks({ firstClick: "" });
  };

  const handleClick = (i) => {
    if (clicks.firstClick !== "") {
      //first click is set, so let's validate second click
      validateSecondClick(i);
    } else {
      //no clicks are set yet, therefore let's check whther the box is clickable based on whether the box contain the piece
      if (clickable(i)) {
        setSelected({ selected: clickable(i) });
        setClicks({ firstClick: clickable(i)[0] });
      }
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
      <div style={{ position: "relative", right: "11em" }}>
        Turn: {`${turn}`}
      </div>
    </>
  );
};

export default Game;

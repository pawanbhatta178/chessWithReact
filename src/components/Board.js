import React from "react";
import Square from "./Square";

const style = {
  width: "250px",
  height: "250px",
  margin: "auto auto",
  display: "grid",
  gridTemplate: "repeat(8, 1fr) / repeat(8, 1fr)",
};

const Board = ({ squares, onClick, color, configs }) => {
  const renderConfig = (index) => {
    let answer = "";
    configs.forEach((config) => {
      if (config[0] === index) {
        answer = config[3];
      }
    });
    return answer;
  };

  return (
    <div style={style}>
      {squares.map((square, index) => (
        <Square
          color={color[index]}
          renderPiece={renderConfig(index)}
          key={index}
          number={index}
          value={square}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;

import React from "react";
import BlackBishop from "../pieces/BlackBishop";
import Piece from "react-chess-pieces";

const style = {
  border: "1px solid black",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  height: "2em",
  width: "2em",
};

const styleBlack = {
  ...style,
  background: "white",
};
const styleWhite = {
  ...style,
  background: "grey",
};

const styleBlackShaded = {
  ...styleBlack,
  background: "black",
};
const styleWhiteShaded = {
  ...styleWhite,
  background: "black",
};

// <button className="square" style={styleBlack} onClick={onClick}>
//{number}
//</button>

const loadPiecesImage = (pieceId) => {
  let img = "";
  switch (pieceId) {
    case "br1":
      img = <Piece piece="r" />;
      break;
    case "bh1":
      img = <Piece piece="n" />;
      break;
    case "bb1":
      img = <Piece piece="b" />;
      break;
    case "bq1":
      img = <Piece piece="q" />;
      break;
    case "bk1":
      img = <Piece piece="k" />;
      break;
    case "bb2":
      img = <Piece piece="b" />;
      break;
    case "bh2":
      img = <Piece piece="n" />;
      break;
    case "br2":
      img = <Piece piece="r" />;
      break;
    case "bp1":
      img = <Piece piece="p" />;
      break;
    case "bp2":
      img = <Piece piece="p" />;
      break;
    case "bp3":
      img = <Piece piece="p" />;
      break;
    case "bp4":
      img = <Piece piece="p" />;
      break;
    case "bp5":
      img = <Piece piece="p" />;
      break;
    case "bp6":
      img = <Piece piece="p" />;
      break;
    case "bp7":
      img = <Piece piece="p" />;
      break;
    case "bp8":
      img = <Piece piece="p" />;
      break;

    case "wr1":
      img = <Piece piece="R" />;
      break;
    case "wh1":
      img = <Piece piece="N" />;
      break;
    case "wb1":
      img = <Piece piece="B" />;
      break;
    case "wq1":
      img = <Piece piece="Q" />;
      break;
    case "wk1":
      img = <Piece piece="K" />;
      break;
    case "wb2":
      img = <Piece piece="B" />;
      break;
    case "wh2":
      img = <Piece piece="N" />;
      break;
    case "wr2":
      img = <Piece piece="R" />;
      break;
    case "wp1":
      img = <Piece piece="P" />;
      break;
    case "wp2":
      img = <Piece piece="P" />;
      break;
    case "wp3":
      img = <Piece piece="P" />;
      break;
    case "wp4":
      img = <Piece piece="P" />;
      break;
    case "wp5":
      img = <Piece piece="P" />;
      break;
    case "wp6":
      img = <Piece piece="P" />;
      break;
    case "wp7":
      img = <Piece piece="P" />;
      break;
    case "wp8":
      img = <Piece piece="P" />;
      break;
  }

  return img;
};

const Square = ({ number, value, color, onClick, renderPiece }) => {
  return color === "black" ? (
    <button className="square" style={styleBlack} onClick={onClick}>
      {loadPiecesImage(renderPiece)}
    </button>
  ) : (
    <button className="square" style={styleWhite} onClick={onClick}>
      {loadPiecesImage(renderPiece)}
    </button>
  );
};

export default Square;

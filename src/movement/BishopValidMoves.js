const IndexToCoordinate = require("./IndexToCoordinate");
const CoordinateToIndex = require("./CoordinateToIndex");

const BishopValidMoves = (position) => {
  let validDest = [];
  const coordinate = IndexToCoordinate(position);
  const { row, column } = coordinate;

  const coordinates = [];
  for (let i = 1; i < 8; i++) {
    coordinates.push({ row: row + i, column: column + i });
    coordinates.push({ row: row + i, column: column - i });
    coordinates.push({ row: row - i, column: column + i });
    coordinates.push({ row: row - i, column: column - i });
  }

  const possible_coordinates = coordinates.filter((coordinate) => {
    //filtering out impossible chess coordinates
    return (
      coordinate.row >= 0 &&
      coordinate.row < 8 &&
      coordinate.column >= 0 &&
      coordinate.column < 8
    );
  });
  possible_coordinates.forEach((coordinate) => {
    validDest.push(CoordinateToIndex(coordinate));
  });
};
BishopValidMoves(36);
module.exports = BishopValidMoves;

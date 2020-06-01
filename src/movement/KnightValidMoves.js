const IndexToCoordinate = require("./IndexToCoordinate");
const CoordinateToIndex = require("./CoordinateToIndex");

const KnightValidMoves = (position) => {
  let validDest = [];
  const coordinate = IndexToCoordinate(position);
  const { row, column } = coordinate;

  const coordinates = [
    { row: row - 2, column: column + 1 },
    { row: row - 2, column: column - 1 },
    { row: row - 1, column: column + 2 },
    { row: row + 1, column: column + 2 },
    { row: row + 2, column: column + 1 },
    { row: row + 2, column: column - 1 },
    { row: row - 1, column: column - 2 },
    { row: row + 1, column: column - 2 },
  ];
  const possible_coordinates = coordinates.filter((coordinate) => {
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

module.exports = KnightValidMoves;

const IndexToCoordinate = require("./IndexToCoordinate");
const CoordinateToIndex = require("./CoordinateToIndex");

const PawnBlackValidMoves = (position) => {
  let validDest = [];
  const coordinate = IndexToCoordinate(position);
  const { row, column } = coordinate;

  const coordinates = [];
  coordinates.push({ row: row + 1, column: column });

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
PawnBlackValidMoves(55);
module.exports = PawnBlackValidMoves;

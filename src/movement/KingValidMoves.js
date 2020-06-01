const KingValidMoves = (position) => {
  let validDest = [];
  let leftAligned = false;
  let rightAligned = false;
  let topAligned = false;
  let bottomAligned = false;
  let rem = position % 8;
  let div = Math.trunc(position / 8);

  if (rem === 0) {
    leftAligned = true;
  }
  if (rem === 7) {
    rightAligned = true;
  }
  if (div === 0) {
    topAligned = true;
  }
  if (div >= 7) {
    bottomAligned = true;
  }

  if (!topAligned && !bottomAligned && !rightAligned & !leftAligned) {
    validDest.push(position + 1);
    validDest.push(position - 1);
    validDest.push(position + 8);
    validDest.push(position - 8);
    validDest.push(position + 8 - 1, position + 8 + 1);
    validDest.push(position - 8 - 1, position - 8 + 1);
  } else if (topAligned && leftAligned) {
    validDest.push(position + 1);
    validDest.push(position + 8);
    validDest.push(position + 8 + 1);
  } else if (topAligned && rightAligned) {
    validDest.push(position - 1);
    validDest.push(position + 8);
    validDest.push(position + 8 - 1);
  } else if (bottomAligned && leftAligned) {
    validDest.push(position + 1);
    validDest.push(position - 8);
    validDest.push(position - 8 + 1);
  } else if (bottomAligned && rightAligned) {
    validDest.push(position - 1);
    validDest.push(position - 8);
    validDest.push(position - 8 - 1);
  } else if (topAligned) {
    validDest.push(position + 1);
    validDest.push(position - 1);
    validDest.push(position + 8);
    validDest.push(position + 8 - 1, position + 8 + 1);
  } else if (rightAligned) {
    validDest.push(position - 1);
    validDest.push(position + 8);
    validDest.push(position - 8);
    validDest.push(position + 8 - 1);
    validDest.push(position - 8 - 1);
  } else if (bottomAligned) {
    validDest.push(position + 1);
    validDest.push(position - 1);
    validDest.push(position - 8);
    validDest.push(position - 8 - 1, position - 8 + 1);
  } else {
    //which means item is left Aligned
    validDest.push(position + 1);
    validDest.push(position + 8);
    validDest.push(position - 8);
    validDest.push(position + 8 + 1);
    validDest.push(position - 8 + 1);
  }
  return validDest;
};
module.exports = KingValidMoves;

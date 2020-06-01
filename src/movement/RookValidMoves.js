const RookValidMove = (position) => {
  div = Math.trunc(position / 8); //base position of the line
  rem = position % 8;
  let validDest = [];

  for (let i = 0 - div; i < 8 - div; i++) {
    let possible_dest = position + 8 * i;
    validDest.indexOf(possible_dest) === -1
      ? validDest.push(possible_dest)
      : null;
  }
  let lower_sidemove = position - rem;
  let higher_sidemove = lower_sidemove + 7;

  for (let i = lower_sidemove; i <= higher_sidemove; i++) {
    validDest.indexOf(i) === -1 ? validDest.push(i) : null;
  }
  //removing the current position since item cannot move to the same place. It has to move somehwre else.
  var index = validDest.indexOf(position);
  if (index !== -1) validDest.splice(index, 1);
  return validDest;
};
module.exports = RookValidMoves;

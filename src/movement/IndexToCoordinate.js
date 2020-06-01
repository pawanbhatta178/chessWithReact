function IndexToCoordinate(position){
    const column=position%8;
    const row=Math.trunc(position/8);
    return {row,column};
}
module.exports= IndexToCoordinate;
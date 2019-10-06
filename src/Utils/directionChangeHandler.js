/*
  Convert the direction to a number based on the lookup table. The lookup table
  has values for direction mimicing the position of a clock's hour needle.
  Based on the direction to which the Pacman should be changed to, add or
  subtract 3 from the numerical value. And then do a reverse lookup to identify
  the new direction that the Pacman now points to.
*/
const changePacmanDirection = (command, position) => {
  const { direction } = position;
  let directionInNumber = directionToNumberMapping[direction];

  if (command === 'left') {
    directionInNumber-= 3;
  } else {
    directionInNumber+= 3;
  }

  position.direction = getDirectionFromNumber(directionInNumber);
  return position;
}

/*
  Numerical value for each of the directions, mimicing the direction of a Hour needle in a Clock.
  Pacman facing North will be having a direction value of 0 and 3, 6, 9 for east,
  south and west respectively.
*/
const directionToNumberMapping = {
  'north': 0,
  'east': 3,
  'south': 6,
  'west' : 9
}

/*
  Each direction change will do +3 (for RIGHT move) or -3 (for LEFT move) to the
  directionInNumber. Based on this logic, the possible values for directionInNumber
  are -3 (Turn left from North), 0, 3, 6, 9, 12 (Turn right from West).
  To normalize the value, to enable lookup, add 12 to the value and do a mod by 12.
  That way a value of -3 (which should resolve to WEST since this was a LEFT turn
  from NORTH) will get rightly resolved as 9 ( (-3 + 12) / 12 )
*/
const getDirectionFromNumber = directionInNumber => {
  directionInNumber = (directionInNumber + 12) % 12;
  return (
    Object.keys(directionToNumberMapping).find(
      direction => directionToNumberMapping[direction] === directionInNumber)
  )
}

export default changePacmanDirection;

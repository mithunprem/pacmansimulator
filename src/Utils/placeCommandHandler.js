import { PLACE_DELIMITER, POSITION_DELIMITER, MAX_COORDINATE } from '../Constants';

const setPacmanPosition = (command, pacmanPosition) => {
  const [, position ] = command.split(PLACE_DELIMITER);
  const [ x, y, direction ] = position.split(POSITION_DELIMITER);
  let isCommandExecuted = false;

  // Set the Pacman's x and y only if it is within the board dimensions.
  // Any place command that will try to place the Pacman outside the board will
  // be ignored.
  if ( x <= MAX_COORDINATE && y <= MAX_COORDINATE) {
    pacmanPosition = {
      x: Number(x),
      y: Number(y),
      direction
    };
    isCommandExecuted = true;
  }

  return [ pacmanPosition, isCommandExecuted ];
}

export default setPacmanPosition;

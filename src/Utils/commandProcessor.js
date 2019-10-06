import setPacmanPosition from './placeCommandHandler';
import movePacman from './moveCommandHandler';
import changePacmanDirection from './directionChangeHandler';

const processCommand = (command, commandList, pacmanPosition) => {
  let isCommandExecuted = false;
  let shouldReportPacmanStatus = false;

  // Convert the command to lowercase to ensure the processing will work
  // the same for any case input.
  command = command.toLowerCase();

  if (command.startsWith('place')) {
    [ pacmanPosition, isCommandExecuted ] = setPacmanPosition(command, pacmanPosition);
  } else {
    const { x } = pacmanPosition;

    /*
      Ensure that the Pacman is on the table before executing any MOVE
      or direction commands. If the Pacman is on the table, then the
      x coordinate should be greater than -1.
    */
    if (x > -1) {
      switch(command) {
        case 'move':
          [ pacmanPosition, isCommandExecuted ] = movePacman(pacmanPosition);
          break;
        case 'left':
        case 'right':
          // Execute the direction change`.
          pacmanPosition = changePacmanDirection(command, pacmanPosition);
          isCommandExecuted = true;
          break;
        case 'report':
          shouldReportPacmanStatus = true;
          isCommandExecuted = true;
          break;
        case 'reset':
          commandList = [];
          pacmanPosition = {
            x: -1,
            y: -1,
            direction: ''
          }
          break;
        default:
      }
    }
  }

  // Add successfully executed commands to the command list.
  if (isCommandExecuted) {
    commandList.push(command);
  }

  return { commandList, pacmanPosition, shouldReportPacmanStatus };
}


export default processCommand;

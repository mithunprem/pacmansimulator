import processCommand from '../../Utils/commandProcessor';

describe('Process Command', () => {
  const commandList = [];
  let pacmanPosition = { x: -1, y: -1, direction: '' };
  const placeCommand = 'place 0,0,north';
  const moveCommand = 'move';

  it('should ignore any command before a place command is executed', () => {
    const result = processCommand(moveCommand, commandList, pacmanPosition);
    expect(result.commandList.length).toEqual(0);
  });

  it('should ignore a place command that will try to place the pacman outside the table', () => {
    const command = "place 6,6,north";
    const placeCommandResult = processCommand(command, commandList, pacmanPosition);
    expect(placeCommandResult.commandList.length).toEqual(0);
  });

  it('should place the pacman on the table when a valid PLACE command is executed', () => {
    const placeCommandResult = processCommand(placeCommand, commandList, pacmanPosition);
    expect(placeCommandResult.commandList.length).toEqual(1);
    expect(placeCommandResult.pacmanPosition.x).toEqual(0);
    expect(placeCommandResult.pacmanPosition.y).toEqual(0);
    expect(placeCommandResult.pacmanPosition.direction).toEqual('north');
  });

  it('should move the pacman by one step if a move command is executed after placing the pacman, provided the pacman will not fall of the table with this move.', () => {
    const placeCommandResult = processCommand(placeCommand, [], pacmanPosition);
    const moveCommandResult = processCommand(moveCommand, placeCommandResult.commandList, placeCommandResult.pacmanPosition);
    expect(moveCommandResult.commandList.length).toEqual(2);
    expect(moveCommandResult.pacmanPosition.x).toEqual(0);
    expect(moveCommandResult.pacmanPosition.y).toEqual(1);
    expect(moveCommandResult.pacmanPosition.direction).toEqual('north');
  });

  it('should turn a pacman facing north, by -90 degrees to face west, if a left command is executed', () => {
    const placeCommandResult = processCommand(placeCommand, [], pacmanPosition);
    const directionCommand = "left";
    const directionCommandResult = processCommand(directionCommand, placeCommandResult.commandList, placeCommandResult.pacmanPosition);
    expect(directionCommandResult.commandList.length).toEqual(2);
    expect(directionCommandResult.pacmanPosition.direction).toEqual('west');
  });

  it('should turn a pacman facing north, by 90 degrees to face east, if a right command is executed', () => {
    const placeCommandResult = processCommand(placeCommand, [], pacmanPosition);
    const directionCommand = "right";
    const directionCommandResult = processCommand(directionCommand, placeCommandResult.commandList, placeCommandResult.pacmanPosition);
    expect(directionCommandResult.commandList.length).toEqual(2);
    expect(directionCommandResult.pacmanPosition.direction).toEqual('east');
  });

  it('should ignore any movements that would make the pacman fall from the table', () => {
    const placeCommandResult = processCommand(placeCommand, [], pacmanPosition);
    const directionCommand = "left";
    const directionCommandResult = processCommand(directionCommand, placeCommandResult.commandList, placeCommandResult.pacmanPosition);
    // Since the pacman is at 0,0 facing left, further move will make the pacman fall from the table and hence will be ignored.
    const moveCommandResult = processCommand(moveCommand, directionCommandResult.commandList, directionCommandResult.pacmanPosition);
    // Ensure that the latest command was ignored and not added to the commandList.
    expect(moveCommandResult.commandList.length).toEqual(2);
    expect(moveCommandResult.pacmanPosition.x).toEqual(placeCommandResult.pacmanPosition.x);

    // Now set the pacman's to the top right corner again and then try to move it.
    const newPlaceCommand = "place 4,4,north";
    const newPlaceCommandResult = processCommand(newPlaceCommand, moveCommandResult.commandList, moveCommandResult.pacmanPosition);
    const newMoveCommandResult = processCommand(moveCommand, newPlaceCommandResult.commandList, newPlaceCommandResult.pacmanPosition);
    expect(newMoveCommandResult.commandList.length).toEqual(3);
    expect(newMoveCommandResult.pacmanPosition.x).toEqual(newPlaceCommandResult.pacmanPosition.x);
  });

  it('should set the shouldReportPacmanStatus to true for Report command', () => {
    const placeCommandResult = processCommand(placeCommand, [], pacmanPosition);
    const reportCommand = "report";
    const reportCommandResult = processCommand(reportCommand, placeCommandResult.commandList, placeCommandResult.pacmanPosition);
    expect(reportCommandResult.shouldReportPacmanStatus).toEqual(true);
  });

  it('should reset the pacman position and command list when a reset command is executed.', () => {
    const placeCommandResult = processCommand(placeCommand, [], pacmanPosition);
    const resetCommand = "reset";
    const resetCommandResult = processCommand(resetCommand, placeCommandResult.commandList, placeCommandResult.pacmanPosition);
    expect(resetCommandResult.commandList.length).toEqual(0);
    expect(resetCommandResult.pacmanPosition.x).toEqual(-1);
    expect(resetCommandResult.pacmanPosition.y).toEqual(-1);
    expect(resetCommandResult.pacmanPosition.direction).toEqual('');
  });

});

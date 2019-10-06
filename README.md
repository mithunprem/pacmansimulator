# Pacman Simulator

## About
This application is a simulation of a Pacman moving on a square tabletop of dimensions 5 units x 5 units.  
The Pacman is free to roam around the surface of the table, but is prevented from falling to destruction. Any movement that would result in the Pacman falling from the table will be prevented, however further valid movement commands can still be executed.

### Steps to use
User can enter the commands in the input text field and hit the 'Execute Command' button to execute the command.  

Following are the valid commands that can be used in the application.  
`PLACE X,Y,DIRECTION` - To place the Pacman on the table at the position (X,Y) facing the DIRECTION specified.  
`MOVE` - To move the Pacman by one step in the direction it is currently facing.  
`LEFT` - To rotate the Pacman counter clockwise by 90 degress without changing it's position.  
`RIGHT` - To rotate the Pacman clockwise by 90 degress without changing it's position.  
`REPORT` - To get the current X,Y and DIRECTION of the Pacman.  
`RESET` - To reset the Pacman's position and take it off the table.  

Successfully executed commands will be displayed in a list on the screen.  
When the user issues a REPORT command, the current position of the Pacman will be displayed above the executed commands list.  

### Notes :
- The origin (0,0) is considered to be the SOUTH WEST most corner.  
- The first valid command to the Pacman is a PLACE command, after that, any sequence of commands can be issued, in any order, including another PLACE command. The application will discard all commands in the sequence until a valid PLACE command has been executed.  
- A Pacman that is not on the table will ignore the MOVE, LEFT, RIGHT, REPORT and RESET commands.

### Validations in UI
- Invalid or unrecognised commands will not be executed. The input field will show a warning border and the execute button will be disabled till the user edit the command.

### Test coverage:
Unit tests are provided for each component and for the business logic.

## Steps to run the application

- Install Node.js (https://nodejs.org/en/), if not installed already

## Install dependencies

In the project directory, you can run:

### `yarn install`

## To start the application

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
The app is ready to be deployed!

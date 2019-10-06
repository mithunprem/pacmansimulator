import React, { Component, Fragment } from 'react';
import CommandInput from '../../Components/CommandInput';
import Reports from '../../Components/Reports';
import Instructions from '../../Components/Instructions';
import processCommand from '../../Utils/commandProcessor';

export default class CommandModule extends Component {

  state = {
    commandList: [],
    pacmanPosition: {
      x: -1,
      y: -1,
      direction: ''
    },
    shouldReportPacmanStatus: false
  }

  executeCommand = command => {
    let { commandList, pacmanPosition, shouldReportPacmanStatus } = this.state;

    ({ commandList, pacmanPosition, shouldReportPacmanStatus }
      = processCommand(command, commandList, pacmanPosition));

    this.setState({
      commandList,
      pacmanPosition,
      shouldReportPacmanStatus
    });
  }

  render() {
    const { commandList, pacmanPosition, shouldReportPacmanStatus } = this.state;

    return (
      <Fragment>
        <CommandInput executeCommand={this.executeCommand} />
        <hr />
        <Reports
          reportPacmanStatus={shouldReportPacmanStatus}
          pacmanPosition={pacmanPosition}
          commandList={commandList}
        />
        <Instructions />
      </Fragment>
    );
  }
}

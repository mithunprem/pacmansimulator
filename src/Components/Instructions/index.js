import React, { Component, Fragment } from 'react';
import Button from '../Button';
import { Collapse, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import './instructions.scss';

export default class Instructions extends Component  {
  state = {
    showInstructions: false,
  }

  toggleInstructions = () => {
    this.setState({ showInstructions: !this.state.showInstructions });
  }

  render() {
    const { showInstructions } = this.state;
    const buttonLabel = showInstructions ? 'Hide instructions' :
      'View instructions and sample commands';

    return (
      <Fragment>
        <div className="instructions ml-3 mb-3 mr-3">
          <Button
            className="instructions-button btn btn-link btn-sm p-0"
            label={buttonLabel}
            onClick={this.toggleInstructions} />
          <Collapse className="mt-2 instructions-text text-muted" isOpen={showInstructions}>
            <Card>
              <CardBody>
                <p className="pb-2">A Pacman, waiting for your command to move around on a square tabletop
                  of dimensions 5 units x 5 units. And don't worry, he is safe guarded from
                  falling off the table even if you ever (intentionally or unintentionally) command it to !
                </p>
                <p>Valid commands :</p>
                <ListGroup>
                  <ListGroupItem><b>PLACE X,Y,DIRECTION</b> - To place the pacman on the table at the position (X,Y) facing the DIRECTION specified.</ListGroupItem>
                  <ListGroupItem><b>MOVE</b> - To move the pacman by one step in the direction it is currently facing.</ListGroupItem>
                  <ListGroupItem><b>LEFT</b> - To rotate the pacman counter clockwise by 90 degress without changing it's position.</ListGroupItem>
                  <ListGroupItem><b>RIGHT</b> - To rotate the pacman clockwise by 90 degress without changing it's position.</ListGroupItem>
                  <ListGroupItem><b>REPORT</b> - To get the current X,Y and DIRECTION of the pacman.</ListGroupItem>
                  <ListGroupItem><b>RESET</b> - To reset the pacman's position and take it off the table.</ListGroupItem>
                </ListGroup>
                <p className="mt-3">Notes :</p>
                  <ul className="pl-3 m-0">
                    <li>The position 0,0 is the SOUTH WEST most corner of the table.</li>
                    <li>The first valid command to the pacman is a PLACE command. The application
                      will discard all commands in the sequence until a valid PLACE command has been executed.</li>
                    <li>A pacman that is not on the table will ignore the MOVE, LEFT, RIGHT, REPORT and RESET commands</li>
                  </ul>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </Fragment>
    );
  }
}



//   - .

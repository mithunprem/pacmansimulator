import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PacmanPositionReport = ({ pacmanPosition }) => {

  const { x, y, direction } = pacmanPosition;

  return (
    <Fragment>
      <div className="report alert alert-info">
        <span>Pacman's current position is: {x}, {y}, {direction.toUpperCase()}</span>
      </div>
    </Fragment>
  );
}

PacmanPositionReport.propTypes = {
  pacmanPosition: PropTypes.object
}

export default PacmanPositionReport;

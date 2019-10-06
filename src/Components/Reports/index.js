import React, { Fragment } from 'react';
import CommandList from '../../Components/CommandList';
import PacmanPositionReport from '../../Components/PacmanPositionReport';
import PropTypes from 'prop-types';
import './reports.scss';

const Reports = ({ reportPacmanStatus, pacmanPosition, commandList }) => {

  return (
    <Fragment>
      <div className="reports m-3">
        { reportPacmanStatus ?
          <PacmanPositionReport pacmanPosition={pacmanPosition} /> : ''
        }
        { commandList.length > 0 ?
          <CommandList commandList={commandList} /> : ''
        }
      </div>
    </Fragment>
  );
}

Reports.propTypes = {
  reportPacmanStatus: PropTypes.bool,
  pacmanPosition: PropTypes.object,
  commandList: PropTypes.array
}

export default Reports;

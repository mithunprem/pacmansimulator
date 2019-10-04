import React, { Fragment } from 'react';
import './commandList.scss';

const CommandList = ({ commandList }) => {
  return (
    <Fragment>
      {
        (commandList.length > 0) ? (
          <div className="command-list ml-3">
            <div className="command-list-header">
              Commands executed
            </div>
            <table className="table m-0 table-sm table-striped table-bordered">
              <tbody>
                {
                  commandList.map((command, index) => {
                    return(
                      <tr key={index}>
                        <td className="p-2 command-row">{command}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        ) : ''
      }
    </Fragment>
  );
}

export default CommandList;
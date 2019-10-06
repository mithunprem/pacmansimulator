import React from 'react';
import { create } from 'react-test-renderer';
import PacmanPositionReport from '../../Components/PacmanPositionReport';

describe("PacmanPositionReport", () => {
  const pacmanPosition = { x:1, y:1, direction:'NORTH' };
  test("should render without throwing an error", () => {
    const report = create(<PacmanPositionReport pacmanPosition={pacmanPosition} />).toJSON()
    expect(report).toMatchSnapshot()
  });
});

import React, { Fragment } from 'react';
import './header.scss';

const Header = () => {
  return (
    <Fragment>
      <header className="pacman-simulator-header">
        <h5 className="ml-3 header-text">Pacman Simulator</h5>
      </header>
    </Fragment>
  );
}

export default Header;

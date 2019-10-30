import React from 'react';
import Logo from '../../assets/graphics/logo.png';

import './header-styles.scss';

const Header = () => {
  return (
    <header>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='SimpleTut' />
        </div>
      </div>
    </header>
  );
};

export default Header;

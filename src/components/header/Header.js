import React from 'react';
import Logo from '../../assets/graphics/logo.png';

import './header-styles.scss';

const Header = () => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img data-test='logoImg' src={Logo} alt='SimpleTut' />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import redberryLogo from '../../assets/redberryLogo.svg';

const Header = ({ pageNumber }) => {
  return (
    <header className='w-full flex  flex-col'>
      <div className='flex justify-between items-center'>
        <img src={redberryLogo} alt='' />
        <p className='font-bold text-4xl '>{pageNumber} / 4</p>
      </div>
      <div
        style={{ backgroundColor: '#232323' }}
        className='mt-6 h-1.8  w-full'
      ></div>
    </header>
  );
};

Header.propTypes = {
  pageNumber: PropTypes.number.isRequired,
};

export default React.memo(Header);

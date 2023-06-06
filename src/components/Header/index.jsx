import React from 'react';
import PropTypes from 'prop-types';
import { RedberryLogo } from '../icons';

const Header = ({ pageNumber }) => {
  return (
    <header className='w-full flex  flex-col mt-24'>
      <div className='flex justify-between items-center'>
        <RedberryLogo />
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

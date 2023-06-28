import React from 'react';
import './loader.css';

const Loader = ({ fullPage }) => {
  return fullPage ? (
    <div className='full-page'>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

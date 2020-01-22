import React from 'react';
import logo from '../img/connor.jpg';
export default function Profile() {
  return (
    <div className='profileImage'>
      <img src={logo} width='100px' alt='gb1' style={{ borderRadius: '50%' }} />
    </div>
  );
}

import React from 'react';
import Shape from '../../assets/images/shape.png';

const CurrentCustomerAdmin = () => {
  return (
    <div className='bg-black opacity-80 w-1/4 lg:w-1/6  cursor-pointer flex justify-evenly items-center'>
      <div className=' bg-stone-400 w-8 h-8 rounded-full flex justify-center items-center'>
        <p className='font-bold'>A</p>
      </div>
      <div className='hidden lg:contents text-white text-xs'>
        Customer Admin #1
      </div>
      <img src={Shape} alt='chevron icon' />
    </div>
  );
};

export default CurrentCustomerAdmin;

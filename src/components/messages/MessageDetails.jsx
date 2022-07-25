import React from 'react';
import ClosedEnvelop from '../../assets/images/closedEnvelop.png';

const MessageDetails = () => {
  return (
    <div className=' bg-gray-100 flex flex-col gap-3'>
      <div className='bg-white w-11/12 h-32 ml-auto mr-auto mt-4 p-4 border rounded'>
        <p className='font-bold'>Mike Hatfield</p>
        <p className='font-semibold mt-2'>mhatfield@gmail.com</p>
        <p className='text-cyan-400 cursor-pointer hover:font-semibold mt-2'>
          07 56 34 21 34
        </p>
      </div>
      <div className='bg-white w-11/12 h-3/4 ml-auto mr-auto border'>
        <div className='flex p-3'>
          <img
            className=' h-full mt-1'
            src={ClosedEnvelop}
            alt='enveloppe fermée'
          />
          <div className='ml-2'>
            <p className='font-bold'>Mike Hatfield</p>
            <p className='font-semibold text-sm'>mhatfield@gmail.com</p>
            <p className='text-xs text-gray-400 mt-1'>Jeudi 18 mars 15:12</p>
          </div>
        </div>
        <p className='p-4 text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Merci,
        </p>
      </div>
    </div>
  );
};

export default MessageDetails;

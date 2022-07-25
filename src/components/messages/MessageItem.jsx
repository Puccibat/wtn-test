import React from 'react';
import ClosedEnvelop from '../../assets/images/closedEnvelop.png';

const MessageItem = () => {
  return (
    <div className='grid grid-flow-col lg:grid-cols-[30px_minmax(300px,_1fr)_30px] lg:gap-0 gap-1 w-full h-34 border border-b-stone-200 border-t-0'>
      <div className='pt-2 pl-2 mt-2'>
        <img className='' src={ClosedEnvelop} alt='enveloppe fermée' />
      </div>
      <div className='flex flex-col p-2'>
        <p className='text-xl lg:text-base font-bold'>Mike Hatfield</p>
        <p className='font-semibold lg:text-sm'>
          Message envoyé depuis wethenew.com
        </p>
        <p className='lg:text-xs text-gray-400'>
          J'aimerais connaitre le suivi de ma commande 1234564, pouvez vous m'en
          dire plus ?
        </p>
      </div>
      <p className='font-semibold lg:text-xs mt-8 mr-2'>15:11</p>
    </div>
  );
};

export default MessageItem;

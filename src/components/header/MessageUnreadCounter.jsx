import React from 'react';
import Envelop from '../../assets/images/envelop.png';

const MessageUnreadCounter = () => {
  const messagesUnread = 4;
  return (
    <div className='bg-cyan-400 w-16 h-9 mt-3 ml-20 flex justify-center items-center gap-2'>
      <img src={Envelop} alt='envelop icon' />
      <p className=' text-white font-semibold'>{messagesUnread}</p>
    </div>
  );
};

export default MessageUnreadCounter;

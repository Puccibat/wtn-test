import React from 'react';
import MessageItem from './MessageItem';
import MessageDetails from './MessageDetails';

const MessageList = () => {
  //screen width 820px
  return (
    <div className='absolute lg:grid lg:grid-cols-[1fr_2fr] h-full'>
      <div>
        <MessageItem />
        <MessageItem />
      </div>
      <MessageDetails />
    </div>
  );
};

export default MessageList;

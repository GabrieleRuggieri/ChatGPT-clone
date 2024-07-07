import React from 'react';
import userIcon from '../assets/user-icon.png';
import gptImgLogo from '../assets/chatgptLogo.svg';
import sendBtn from '../assets/send.svg';

export function MainContent({ chats, input, setInput, handleSend }) {
  return (
    <div className='main'>
      <div className='chats'>
        {chats.map((chat, index) => (
          <div key={index}>
            <div className='chat'>
              <img className='chatImg' src={userIcon} alt='' />
              <p className='txt'>{chat.user}</p>
            </div>
            {chat.bot && (
              <div className='chat bot'>
                <img className='chatImg' src={gptImgLogo} alt='' />
                <p className='txt'>{chat.bot}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='chatFooter'>
        <div className='inp'>
          <input
            type='text'
            placeholder='Send a message...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='send' onClick={() => handleSend(input)}>
            <img src={sendBtn} alt='Send' />
          </button>
        </div>
        <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT 7 July Version.</p>
      </div>
    </div>
  );
}

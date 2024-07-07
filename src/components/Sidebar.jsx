import React from 'react';
import gptLogo from '../assets/chatgpt.svg';
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';

export function Sidebar({ handleNewChatClick, handleQueryClick }) {
  return (
    <div className="sideBar">
      <div className="upperSide">
        <div className='upperSideTop'>
          <img src={gptLogo} alt="Logo" className="logo" />
          <span className="brand">ChatGTP</span>
        </div>
        <button className="midBtn" onClick={handleNewChatClick}>
          <img src={addBtn} alt="New chat" className="addBtn" />
          New Chat
        </button>
        <div className="upperSideBottom">
          <button className="query" onClick={() => handleQueryClick("What is Programming?")}>
            <img src={msgIcon} alt="Query" />What is Programming?
          </button>
          <button className="query" onClick={() => handleQueryClick("How to use an API?")}>
            <img src={msgIcon} alt="Query" />How to use an API?
          </button>
        </div>
      </div>
      <div className="lowerSide">
        <div className='listItems'><img src={home} alt='Home' className='listItemsImg' />Home</div>
        <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg' />Saved</div>
        <div className='listItems'><img src={rocket} alt='Upgrade' className='listItemsImg' />Upgrade to Pro</div>
      </div>
    </div>
  );
}
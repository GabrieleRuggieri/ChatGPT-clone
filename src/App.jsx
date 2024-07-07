import './App.css';
import {Sidebar} from './components/Sidebar';
import {MainContent} from './components/MainContent';
import { useState } from 'react';
import { fetchResponse } from './api';

function App() {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);
  const [apiKey, setApiKey] = useState("");

  const handleSend = async (message) => {
    setChats((prevChats) => [...prevChats, { user: message, bot: null }]);
    setInput("");

    try {
      const summary = await fetchResponse(message, apiKey);
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats[updatedChats.length - 1].bot = summary;
        return updatedChats;
      });
    } catch (error) {
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats[updatedChats.length - 1].bot = `Error: ${error.message}`;
        return updatedChats;
      });
    }
  };

  const handleQueryClick = (query) => {
    setInput(query);
    handleSend(query);
  };

  const handleNewChatClick = () => {
    setChats([]);
    setInput("");
  };

  return (
    <div className="App">
      <Sidebar
        handleNewChatClick={handleNewChatClick}
        handleQueryClick={handleQueryClick}
      />
      <MainContent
        chats={chats}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;
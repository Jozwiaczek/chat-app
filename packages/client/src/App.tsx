import './App.css';

import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import useChat from './hooks/useChat';
import useDebounce from './hooks/useDebounce';

const App = () => {
  const { sendMessage, messages } = useChat();

  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const debouncedUser = useDebounce(currentUser, 1000);

  const handleNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!newMessage || !currentUser) {
      return;
    }

    sendMessage(newMessage, currentUser);
    setNewMessage('');
  };

  const onInputKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSendMessage();
    }
  };

  const onUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentUser(event.target.value);
  };

  return (
    <div className="App">
      {debouncedUser ? (
        <h2>{debouncedUser}</h2>
      ) : (
        <input value={currentUser} onChange={onUserInput} placeholder="Enter your nickname..." />
      )}
      <br />
      <br />
      <div>
        {messages.map(({ body, nickname, createdAt }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div>
              <p>{body}</p>
              <strong>
                <span>{nickname}</span>
              </strong>
              &nbsp;
              <span>{createdAt}</span>
            </div>
            <br />
          </div>
        ))}
      </div>
      <br />
      <br />
      <textarea
        placeholder="Write message..."
        value={newMessage}
        onKeyPress={onInputKeyPress}
        onChange={handleNewMessageChange}
      />
      <button type="button" onClick={handleSendMessage}>
        send
      </button>
    </div>
  );
};

export default App;

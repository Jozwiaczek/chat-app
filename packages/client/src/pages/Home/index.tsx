import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../elements/Button';
import TextInput from '../../elements/TextInput';
import { useHotkeys, useLocalStorage } from '../../hooks';
import { WelcomeIcon } from '../../icons';
import routesConfig from '../../routes/routes.config';
import { Container } from './Home.styled';

const Home = () => {
  const [username, setUsername] = useLocalStorage('nickname');
  const [inputUsername, setInputUsername] = useState(username);
  const history = useHistory();

  const onConfirm = () => {
    if (!inputUsername) {
      // TODO: add snackbar
      console.error('Error: username is required');
      return;
    }
    setUsername(inputUsername);
    history.push(routesConfig.CHAT);
  };

  useHotkeys('Enter', onConfirm);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputUsername(target.value);
  };

  return (
    <Container>
      <WelcomeIcon />
      <h1>Hello, Lets Chat</h1>
      <TextInput
        autoFocus
        value={inputUsername}
        onChange={handleInputChange}
        placeholder="Enter your nickname..."
      />
      <Button fullWidth withArrow onClick={onConfirm}>
        Open chat
      </Button>
    </Container>
  );
};

export default Home;

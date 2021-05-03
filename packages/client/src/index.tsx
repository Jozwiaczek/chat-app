import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './providers';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);

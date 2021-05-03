import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalLayout } from '../elements';
import { Chat, Home, PageNotFound } from '../pages';
import routesConfig from './routes.config';

const Routes = () => (
  <BrowserRouter>
    <GlobalLayout>
      <Switch>
        <Route path={routesConfig.HOME} exact>
          <Home />
        </Route>
        <Route path={routesConfig.CHAT}>
          <Chat />
        </Route>
        <PageNotFound />
      </Switch>
    </GlobalLayout>
  </BrowserRouter>
);

export default Routes;

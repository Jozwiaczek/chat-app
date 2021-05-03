import React from 'react';

import Button from '../../elements/Button';
import routesConfig from '../../routes/routes.config';
import { Container } from './PageNotFound.styled';

const PageNotFound = () => (
  <Container>
    <h1>Opps, Page not found</h1>
    <Button withArrow to={routesConfig.HOME} fullWidth>
      Back to home
    </Button>
  </Container>
);

export default PageNotFound;

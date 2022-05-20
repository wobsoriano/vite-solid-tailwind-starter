import { Component } from 'solid-js';

import { Router, useRoutes } from 'solid-app-router';
import routes from './utils/routes';

import Nav from './components/Nav';

const App: Component = () => {
  const Routes = useRoutes(routes)

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;
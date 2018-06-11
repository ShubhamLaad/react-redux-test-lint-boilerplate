import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import NotFoundPage from '../components/not-found-page.component';
import store from '../store/store.config';
import RootComponent from '../components/root.component';
import DashboardContainer from '../containers/dashboard.container';
import NextPageComponent from '../components/next-page.component';

const AppRoutes = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <RootComponent path="/">
          <Switch>
            <Route
              exact
              path="/"
              name='dashboard'
              component={DashboardContainer}
            />
            <Route
              path='/dashboard'
              name='dashboard'
              component={DashboardContainer}
            />
            <Route
              path='/next-page'
              name='next-page'
              component={NextPageComponent}
            />
            <Route
              path="*"
              component={NotFoundPage}
            />
          </Switch>
        </RootComponent>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default AppRoutes;


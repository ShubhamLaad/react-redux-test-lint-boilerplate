import React from 'react';
import ReactDOM from 'react-dom';
import Bluebird from 'bluebird';
import AppRoutes from './routes/app.routes';
import '../static/styles/base.sass';

window.Promise = Bluebird.Promise;

ReactDOM.render(
  <AppRoutes />,
  document.getElementById('root'),
);

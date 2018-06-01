import React from 'react';
import ReactDOM from 'react-dom';
import Bluebird from 'bluebird';
import AppComponent from "./components/app.component";

window.Promise = Bluebird.Promise;

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import Bluebird from 'bluebird';
import AppComponent from "./components/app.component";
import "../static/styles/base.sass";

window.Promise = Bluebird.Promise;

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root'),
);

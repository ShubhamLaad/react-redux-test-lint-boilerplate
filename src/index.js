import React from 'react';
import ReactDOM from 'react-dom';
import Bluebird from 'bluebird';
import { AppComponent } from "./javascipt/components/app.component";

window.Promise = Bluebird.Promise;

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root'),
);
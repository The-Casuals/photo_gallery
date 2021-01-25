import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const listingId = Number(window.location.pathname.match(/\/(\d+)\//)[1]);

ReactDOM.render(
  <App listingId={listingId} />,
  document.getElementById('app'),
);

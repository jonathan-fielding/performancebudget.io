import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://4858aba3214c4b3c82124dff3708f33c@sentry.io/1869831"});

ReactDOM.render(<App />, document.getElementById('root'));

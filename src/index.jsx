import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './Content';

ReactDOM.render(<App />, document.getElementById('toolbar'));

ReactDOM.render(<Content />, document.getElementById('main'));

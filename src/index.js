// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
/* 

* Before React-18

const container = document.getElementById('root')
const root = React.createElement('h1',null, 'Hello world')
ReactDOM.render(root, container)

* After React-18

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<h1>GHellp world</h1>)

*/


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
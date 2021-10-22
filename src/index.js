// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import State from './State.jsx'
/* 

? Before React-18

const container = document.getElementById('root')
const root = React.createElement('h1',null, 'Hello world')
ReactDOM.render(root, container)

// or

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

*/

// ? After React-18

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

// root.render(<ConditionalRendering />)
root.render(<State />)
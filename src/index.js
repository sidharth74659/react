// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo.jsx'
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

// root.render(<propType />)
// root.render(<ConditionalRendering />)
// root.render(<Counter />)
root.render(<Todo />)
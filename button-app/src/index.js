import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const button = React.createElement("button",{"id":"me-gusta-1"} , "me gusta❤️");
const button2 = React.createElement("button",{"id":"me-gusta-2"}, "me gusta❤️");
const button3 = React.createElement("button",{"id":"me-gusta-3"}, "me gusta❤️");

const app = React.createElement(React.Fragment, null, [button, button2, button3]);
root.render(app);

// With JSX
<React.Fragment>
    <button id="me-gusta-1">Me gusta❤️</button>
    <button id="me-gusta-2">Me gusta❤️</button>
    <button id="me-gusta-3">Me gusta❤️</button>
</React.Fragment>
reportWebVitals();

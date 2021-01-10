// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

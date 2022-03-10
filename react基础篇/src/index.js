import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * 元素渲染
 * */



/**
 * React 只更新它需要更新的部分,
 * React DOM 只会更新实际改变了的内容
 * */

function tick() {
    ReactDOM.render( <
        >

        <App/> <
        />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
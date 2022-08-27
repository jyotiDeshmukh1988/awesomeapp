import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const getDate = new Date();
const getTime = getDate.getHours();

let greeting = '';
let cssStyle = {};
if(getTime>1 && getTime<12){
  greeting = 'Good Morning'
  cssStyle.color = 'red'
}
if(getTime>13 && getTime<20){
  greeting = 'Good Afternoon'
  cssStyle.color = 'green'
}
if(getTime>20 && getTime<24){
  greeting = 'Good Night'
  cssStyle.color = 'purple'
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    <App/>
  </>
)
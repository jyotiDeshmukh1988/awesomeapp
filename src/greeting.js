import React from 'react';

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

const Greeting = () => {
    return (
        <>
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      </>
    )
}

export default Greeting
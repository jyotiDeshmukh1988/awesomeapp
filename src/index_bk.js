import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
/*ReactDOM.render('what to show','where to show','call back function') // react dom function parametrs */

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<div><h1>Hello World</h1><h3>Test</h3></div>);// you can pass multiple arguments with parent element or using an array

// v16.x.x

// const arr = ['vinod','tahap']
// In React v16 it is possible for render()
// to return an array of elements

/*root.render(
  [
    <h1 key="1">Hello World</h1>,
    <h3 key="2">Test</h3>
  ]
); // using array type we can pass multiple arguments
*/

// using React Fragment
/*root.render(
  <React.Fragment>
    <h1 key="1">Hello World</h1>,
    <h3 key="2">Test</h3>
    </React.Fragment>
);*/

 //using fragment empty tag called synthetic tag
/*root.render(
  <>
    <h1 key="1">Hello World</h1>,
    <h3 key="2">Test</h3>
    </>
);*/

// JavaScript Expressions in JSX in ReactJs
// we can use only javascript variables and expression not statements
/*const name = "Jyoti Deshmukh"
root.render(
  <>
    <h1 key="1">My name is {name}</h1>,
    <h3 key="2">Sum of 2 and 3 is {2+3}</h3>
    </>
);
*/
// One more note to use javascript variables and expression inside the html element we use curly braces as u seen in the above example

// using template literals use `` back stick
const fname = "Jyoti"
const lname = "Deshmukh"
root.render(
  <>
    <h1 className="heading" key="1">{`My name is ${fname} ${lname}`}</h1>,
    <h3 key="2">Sum of 2 and 3 is {2+3}</h3>
    </>
);


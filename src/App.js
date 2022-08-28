import React from 'react';
import Heading from './Heading';
import List from './List';
//import youtube,{favprog,myname} from './impexpuse';
import * as ques from './impexpuse' // to import all objects from the impexpuse file but not recommended
import Add,{Sub,Mul} from './calc';
//import Greeting from './greeting';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';
const loggegIn = false;

/* conditional rendering */
/*const Greeting =() =>{
    if(loggegIn === true){
        return <UserGreeting/>
    }
    else{
        return <GuestGreeting/>
    }
}
*/
const App = () => {
    return(
        <>
            {/*<Greeting/>*/}
            {loggegIn === true ? <UserGreeting/> : <GuestGreeting/>}
            <Heading/>
            <List/>
            {ques.default}<br/>
            {ques.favprog}<br/>
            {ques.myname()}<br/>
            {ques.mynames()}<br/>
            {`Sum of the two numbers is ${Add(14,10)}`}<br/>
            {`Subtraction of the numbers is ${Sub(20,10)}`}<br/>
            {`Multiplication of the numbers is ${Mul(2,10)}`}
        </>
    )
}         

export default App
import React from 'react';
import Heading from './Heading';
import List from './List';
//import youtube,{favprog,myname} from './impexpuse';
import * as ques from './impexpuse' // to import all objects from the impexpuse file but not recommended

const App = () => {
    return (
        <>
            <Heading/>
            <List/>
            {ques.default}<br/>
            {ques.favprog}<br/>
            {ques.myname()}<br/>
            {ques.mynames()}
        </>
    )
}

export default App
import React, { useState } from 'react';
import { Person } from './Person';

const Government = () =>{
    const [personsState, setPersonState] = useState({
        person: [
          { name: 'Arijit', age: 22 },
          { name: 'Fenink', age: 25 },
          { name: 'Alexiy', age: 21 },
        ],
        otherState: "some other value"
      });
      function switchHandler() {
        console.log("changing the state using hook");
        setPersonState({
          person: [
            { name: 'Alex', age: 26 },
            { name: 'Siri', age: 32 },
            { name: 'Botik', age: 12 },
          ]
        })
      }
    
      return (
        <div className="App">
          <h1>Simple Hook for changing value</h1>
          <button onClick={switchHandler}>Switch Name</button>
          <Person name={personsState.person[0].name} age={personsState.person[0].age} />
          <Person name={personsState.person[1].name} age={personsState.person[1].age} />
          <Person name={personsState.person[2].name} age={personsState.person[2].age} />
        </div>
      );
}
export default Government;
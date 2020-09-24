import React, { useState } from 'react';
import { Person } from './Person';

const Governments = () => {
  const [personsState, setPersonState] = useState({
    person: [
      { name: 'Arijit', age: 22 },
      { name: 'Fenink', age: 25 },
      { name: 'Alexiy', age: 21 },
    ],
    otherState: "some other value"
  });
  const switchHandler = () => {
    setPersonState({
      person: [
        { name: 'Alex', age: 26 },
        { name: 'Siri', age: 32 },
        { name: 'Botik', age: 12 }
      ]
    });
  }
  const show = () => {
    setPersonState({
      person: [
        { name: 'Arijit', age: 22 },
        { name: 'Fenink', age: 25 },
        { name: 'Alexiy', age: 21 },
      ]
    });
  }
  const style={
    color:"red"
}
  return (
    <div className="App">
      <h1>Switch and reset on clicking on third person</h1>
      <button onClick={() => switchHandler()}>Switch Name</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age} />
      <Person name={personsState.person[1].name} age={personsState.person[1].age} />
      <Person click={() => show()} style={style} name={personsState.person[2].name} age={personsState.person[2].age} />
    </div>
  );
}
export default Governments;
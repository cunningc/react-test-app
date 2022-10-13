// App.js

import React from 'react';
import { add, subtract, multiply, divide, relTag } from "my-calculator";

const addRes = add(2, 2, 3); // add accepts multiple numbers in v1.2.0
const subtractRes = subtract(6, 2);
const multiplyRes = multiply(7, 2); // multiply accepts multiple numbers in v1.2.0
const divideRes = divide(10, 2); // divide actually multiplies in v1.0.0 for testing
const verText = relTag;

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>Testing GitHub repo as a library using "my-calculator" {verText}</h1>
          <p>add(2, 2, 3)= {addRes}</p>
          <p>subtract(6, 2)= {subtractRes}</p>
          <p>multiply(7, 2)= {multiplyRes}</p>
          <p>divide(10, 2)= {divideRes}</p>
        </div>
      )
    }
  }
  export default App;
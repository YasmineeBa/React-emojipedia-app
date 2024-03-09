import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


var numbers = [3,56,2,48,5];

const NewNumbers = numbers.map(x => x * x);

console.log(NewNumbers)
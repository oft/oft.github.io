import TSControl from "./hello.ts"
import ReactDOM from "react-dom"
import React from "react"

import {App} from "./App.jsx"
  
ReactDOM.render(<App />,document.getElementById('root'))
console.log(new TSControl().render());
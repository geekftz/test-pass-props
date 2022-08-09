import { useState } from 'react'
import './App.css'
import Checkbox from "./Checkbox";

import CheckboxGroup from './CheckboxGroup'

function App() {

  return (
    <div className="App">
      <CheckboxGroup
        selected={[1, 3]}
      >
        <Checkbox>1</Checkbox>
        <Checkbox>2</Checkbox>
        <Checkbox>3</Checkbox>
      </CheckboxGroup>
    </div>
  )
}

export default App

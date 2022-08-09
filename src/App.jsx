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
        {
          selected => [1, 2, 3].map(value => (
            <Checkbox
              key={value}
              checked={selected.indexOf(value) > -1}
            >
              {value}
            </Checkbox>
          ))
        }
      </CheckboxGroup>
    </div>
  )
}

export default App

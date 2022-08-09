import { useState } from 'react'
import './App.css'

import CheckboxGroup from './CheckboxGroup'

function App() {

  return (
    <div className="App">
      <CheckboxGroup
        group={[1, 2, 3]}
        selected={[1, 3]}
      />
    </div>
  )
}

export default App

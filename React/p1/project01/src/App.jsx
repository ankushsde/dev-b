import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddTodo'
import ToDo from './components/Todos'

function App() {

  return (
    <div>
      <AddToDo />
      <ToDo />
    </div>
  )
}

export default App

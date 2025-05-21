import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddTodo'
import ToDo from './components/Todos'
import { SearchResults } from './features/search/SearchResults'
import { SearchInputs } from './features/search/SearchInput'

function App() {

  return (
    <div>
      <SearchInputs />
      <SearchResults />
    </div>
  )
}

export default App

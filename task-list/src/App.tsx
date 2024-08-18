import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TaskList } from './components/TaskList'

function App() {
  return (
    <>
      <h1>Task List</h1>
      <TaskList/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import NameList from './components/NameList'
import MessageForm from './components/MessageForm'
import UsersList from './components/UsersList'
import Timer from './components/Timer'

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana']
  return (
    <>
      <h1>Esercizi Pasquali:</h1>
      <ClickCounter />
      <NameList names={names} />
      <MessageForm />
      <UsersList />
      <Timer />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ChatApp from './components/ChatApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatApp />
    </>
  )
}

export default App

import './App.css'
import ClickCounter from './components/ClickCounter'
import NameList from './components/NameList'
import MessageForm from './components/MessageForm'
import UsersList from './components/UsersList'
import Timer from './components/Timer'
import Rubrica from './components/Rubrica'

function App() {
  const names = ['Niccolò', 'Alfonso', 'Christian', 'Mattia', 'Monica', 'Morena', 'Silvia']
  
  return (
    <>
      <h1>Esercizi Pasquali:</h1>
      <ClickCounter />
      <NameList names={names} />
      <MessageForm />
      <UsersList />
      <Timer />
      <Rubrica />
    </>
  )
}

export default App

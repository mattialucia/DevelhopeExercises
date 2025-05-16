import './App.css'
import Login from './components/Login'
import InteractiveWelcome from './components/InteractiveWelcome'

function App() {
  return (
    <>
      <InteractiveWelcome />
      <Login onLogin={(arg) => {console.log(arg)}}/>
    </>
  )
}

export default App

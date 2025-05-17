import './App.css'
import Colors from './components/Colors'

function App() {
const colorArray = [{ id: 1, name: "red" }, { id: 2, name: "blue" }];

  return (
    <>
      <Colors colors={colorArray} />
    </>
  )
}

export default App

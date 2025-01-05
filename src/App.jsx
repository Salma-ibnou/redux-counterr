import CounterDisplay from "./components/CounterDisplay"
import CounterDisplay1 from "./components/CounterDisplay1"
import CounterInput from "./components/CounterInput"
import CounterInput1 from "./components/CounterInput1"

function App() {
  return (
    <>
    <center>
      <h1>Redux Counter 1</h1>
      <CounterDisplay/>
      <CounterInput/>
      </center>
      <center>
      <h1>Redux Counter 2</h1>
      <CounterDisplay1/>
      <CounterInput1/>
      </center>
    </>
  )
}

export default App

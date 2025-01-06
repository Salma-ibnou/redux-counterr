import CounterDisplay from "./components/CounterDisplay"
import CounterDisplay1 from "./components/CounterDisplay1"
import CounterDisplay2 from "./components/CounterDisplay2"
import CounterInput from "./components/CounterInput"
import CounterInput1 from "./components/CounterInput1"
import CounterInput2 from "./components/CounterInput2"

function App() {
  return (
    <>
      <center>
      <CounterDisplay/>
      <CounterInput/>
      </center>
      <center>
      <CounterDisplay1/>
      <CounterInput1/>
      </center>
      <center>
      <CounterDisplay2/>
      <CounterInput2/>
      </center>
    </>
  )
}

export default App

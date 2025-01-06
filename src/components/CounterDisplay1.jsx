import { useSelector } from "react-redux"
const CounterDisplay1=() =>{
    const counter=useSelector(store=>store.COUNT1.counter)
    return (

    <>
    <h1> Zin Zidane : {counter}</h1>
    </>
    )
}

export default CounterDisplay1
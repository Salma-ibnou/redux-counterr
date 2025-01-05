import { useSelector } from "react-redux"
const CounterDisplay=() =>{
    const counter=useSelector(store=>store.COUNT.counter)
    return (

    <>
    <h1>{counter}</h1>
    </>
    )
}

export default CounterDisplay
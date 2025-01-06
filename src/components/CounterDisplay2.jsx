import { useSelector } from "react-redux"
const CounterDisplay2=() =>{
    const counter=useSelector(store=>store.COUNT2.counter)
    return (

    <>
    <h1>Lio Messi : {counter}</h1>
    </>
    )
}

export default CounterDisplay2
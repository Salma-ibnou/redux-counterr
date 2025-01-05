import { useDispatch } from "react-redux"
import { decrement, increment } from "../Store/slices/counter-slice"

const CounterInput=()=>{
    const dispatch=useDispatch()
    const doIncrement=()=>{
        let payload=1
        dispatch(increment(payload))    }
    const doDecrement=()=>{
            let payload=1
            dispatch(decrement(payload))    }
        
return (

    <>
    <button onClick={doIncrement}>Increment</button>
    <button onClick={doDecrement}>Increment</button>

    </>
)
}

export default CounterInput
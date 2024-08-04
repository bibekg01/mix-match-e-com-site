import {increment, decrement, incrementByAmount} from './counterSlice'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(
        <div className='w-[full] text-center'>
            <h1>{count}</h1>
            <button onClick={()=>{
                dispatch(increment())
            }}>Increment</button>
        <br/>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br/>
        <button
            onClick={() => {    
                dispatch(incrementByAmount(5))
            }
        }

                >Increse by amount 5</button>
        </div>
    )
}

export default Counter;
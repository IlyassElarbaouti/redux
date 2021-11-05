import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const counter= useSelector(state=>state.counter)
    return (
      <div className="counter">
        <button
          className="counter__button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <p
          onClick={() => dispatch({ type: "RESET" })}
          className="counter__value"
        >
          {counter}
        </p>
        <button
          className="counter__button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
      </div>
    );
}

export default Counter

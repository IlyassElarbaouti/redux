import React from 'react'
import {connect} from 'react-redux'

const Counter = ({counter , incr ,decr , reset}) => {
    return (
      <div className="counter">
        <button className="counter__button" onClick={decr}>
          -
        </button>
        <span onClick={reset} className="counter__value">
          {counter}
        </span>
        <button className="counter__button" onClick={incr}>
          +
        </button>
      </div>
    );
}
const mapDispatch = dispatch =>{return {
  incr: () => dispatch({ type: "INCREMENT" }),
  decr: () => dispatch({ type: "DECREMENT" }),
  reset: () => dispatch({ type: "RESET" }),
};}
const mapState=state=>{return {counter:state}}
const connector = connect(mapState,mapDispatch)

export default connector(Counter)

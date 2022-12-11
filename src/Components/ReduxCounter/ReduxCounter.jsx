import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from '../../Redux/counterSlice'

export function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input placeholder='Enter an amount' onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Increment by amount</button>
      <button onClick={() => dispatch(decrementByAmount(Number(amount)))}>Decrement by amount</button>
    </div>
  )
}
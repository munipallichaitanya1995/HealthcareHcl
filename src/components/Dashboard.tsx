import React, { useReducer } from 'react'

function Dashboard() {
  const reducer = (state:any, action:any  ) => {
    switch (action.type) {
      case 'increment':
        return {  count: state.count+1 }
       case 'decrement':
        return {  count: state.count-1 }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>  
    </div>
  )
}

export default Dashboard
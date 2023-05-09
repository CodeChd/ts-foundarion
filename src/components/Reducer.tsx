import { useReducer } from "react";

type CounterState = {
    count:number
}

type CounterAction = {
    type: string
    payload: number
}



const initialState = {count : 0}; //initial state value

                //current state value
const reducer = (currentState: CounterState , action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return {count: currentState.count + action.payload};
    case "decrement":
        return {count: currentState.count - action.payload};
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

export default function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState); //current state value
  return (
    <div>
      <h1>Count - {count.count}</h1>
      <button onClick={() => dispatch({type: "increment", payload: 10})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>Decrement</button>
      <button onClick={() => dispatch({type: "reset", payload: 10})}>Reset</button>
    </div>
  );
}

import { Reducer, useReducer } from "react";

type State = number;

type Action = {
  type: "add" | "minus";
  state: State;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.state;
    case "minus":
      return state - action.state;
  }
}

const ReducerTypes = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, 0);
  return (
    <div>
      <div>{state}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "add", state: 1 });
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "minus", state: 1 });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ReducerTypes;

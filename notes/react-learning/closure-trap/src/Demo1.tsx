import { Reducer, useReducer, useState } from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
}

const Demo1 = () => {
  const [count1, setCount] = useState(0);
  const [count2, disptach] = useReducer<Reducer<number, Action>>(reducer, 0);

  console.log("render demo1");

  // problem
  const handleAdd = () => {
    setTimeout(() => {
      console.log(count1);
      setCount(count1 + 1);
    }, 1000);
  };

  const resolveHandleClick1 = () => {
    setTimeout(() => {
      console.log(count1);
      setCount((count) => count + 1);
    }, 1000);
  };

  const resolveHandleClick2 = () => {
    setTimeout(() => {
      console.log(count2);
      disptach({ type: "add", num: 1 });
    }, 1000);
  };
  return (
    <>
      <div>
        <div>{count1}</div>
        <div>{count2}</div>
        <button onClick={handleAdd}>add</button>
        <button onClick={resolveHandleClick1}>resolve1 add</button>
        <button onClick={resolveHandleClick2}>resolve2 add</button>
      </div>
    </>
  );
};

export default Demo1;

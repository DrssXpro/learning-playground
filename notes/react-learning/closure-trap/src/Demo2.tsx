import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Problem2 = () => {
  const [count, setCount] = useState(0);

  console.log("render demo2", count);

  const updateCount = () => {
    console.log("count", count);
    setCount(count + 1);
  };

  const updateFn = useRef(updateCount);

  useLayoutEffect(() => {
    updateFn.current = updateCount;
  });

  useEffect(() => {
    setInterval(() => {
      updateFn.current();
    }, 1000);
  }, []);

  // problem 
  // useEffect(() => {
  //   console.log("callback");
  //   setInterval(() => {
  //     console.log("count", count);
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   console.log("callback");
  //   setInterval(() => {
  //     console.log("count", count);
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("count", count);
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);

  return (
    <>
      <div>
        <div>{count}</div>
      </div>
    </>
  );
};

export default Problem2;

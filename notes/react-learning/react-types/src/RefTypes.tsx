import { useEffect, useRef } from "react";

const RefTypes = () => {
  const val = useRef({ name: "test", age: 20 });
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(val.current);
    console.log(dom.current);
  });

  return <div ref={dom}></div>;
};

export default RefTypes;

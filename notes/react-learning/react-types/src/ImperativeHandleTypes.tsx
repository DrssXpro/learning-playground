import { forwardRef, useImperativeHandle, useRef } from "react";

interface ChildCmpProps {}

interface ChildCmpRef {
  handleClick: () => void;
}

const ChildCmp: React.ForwardRefRenderFunction<ChildCmpRef, ChildCmpProps> = (_props, ref) => {
  useImperativeHandle<ChildCmpRef, { aaa: string } & ChildCmpRef>(ref, () => ({
    handleClick: () => {
      console.log("child cmp click");
    },
    aaa: "abc",
  }));

  return <div>childCmp</div>;
};

const ForwardChildCmp = forwardRef(ChildCmp);

const ImperativeHandleTypes = () => {
  const CmpRef = useRef<{ handleClick: () => void }>(null);

  const handleClick = () => {
    CmpRef.current!.handleClick();
  };
  return (
    <div onClick={handleClick}>
      <ForwardChildCmp ref={CmpRef}></ForwardChildCmp>
    </div>
  );
};

export default ImperativeHandleTypes;

interface AProps1 extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  age: number;
}

// new
interface AProps2 extends React.ComponentProps<"a"> {
  name: string;
  age: number;
}

const ChildCmp = (props: AProps1) => {
  return <a {...props}>link1</a>;
};
const ChildCmp2 = (props: AProps2) => {
  return <a {...props}>link2</a>;
};

const HTMLAttributesTypes = () => {
  return (
    <>
      <ChildCmp name="test" age={20} href="https://www.baidu.com" target="_blank" />
      <ChildCmp2 name="test" age={20} href="https://www.baidu.com" target="_blank" />
    </>
  );
};

export default HTMLAttributesTypes;

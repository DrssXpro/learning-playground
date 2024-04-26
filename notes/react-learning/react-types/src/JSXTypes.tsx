interface JSXProps1 {
  content: JSX.Element;
}
interface JSXProps2 {
  content: React.ReactElement;
}
interface JSXProps3 {
  content: React.ReactNode;
}

const JSXTypes1 = ({ content }: JSXProps1) => {
  return <div>{content}</div>;
};
const JSXTypes2 = ({ content }: JSXProps2) => {
  return <div>{content}</div>;
};
const JSXTypes3 = ({ content }: JSXProps3) => {
  return <div>{content}</div>;
};

const JSXTypes = () => {
  return (
    <>
      <div>
        <JSXTypes1 content={<div>content1</div>} />
        <JSXTypes2 content={<div>content2</div>} />
        <JSXTypes3 content={"hello"} />
      </div>
    </>
  );
};

export default JSXTypes;

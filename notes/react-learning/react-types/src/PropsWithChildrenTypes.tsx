type ChildProps = React.PropsWithChildren<{ name?: string; age?: number }>;

const ChildCmp = ({ children }: ChildProps) => {
  return <div>插槽：{children}</div>;
};

const PropsWithChildrenTypes = () => {
  return (
    <div>
      <ChildCmp>
        <div>传递给子组件的内容</div>
      </ChildCmp>
    </div>
  );
};

export default PropsWithChildrenTypes;

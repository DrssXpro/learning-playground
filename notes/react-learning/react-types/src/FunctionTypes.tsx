interface FunctionTypesProps {
  name: string;
  age: number;
}

const FunctionTypes1 = ({ name, age }: FunctionTypesProps) => {
  return (
    <div>
      {name} - {age}
    </div>
  );
};
const FunctionTypes2: React.FC<FunctionTypesProps> = ({ name, age }) => {
  return (
    <div>
      {name} - {age}
    </div>
  );
};

const FunctionTypes = () => {
  return (
    <>
      <FunctionTypes1 name="test1" age={20} />
      <FunctionTypes2 name="test2" age={20} />
    </>
  );
};

export default FunctionTypes;

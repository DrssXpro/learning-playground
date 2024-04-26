const EventHandlerTypes = () => {
  const handleClick1: React.MouseEventHandler = (e) => {
    console.log(e);
  };

  const handleClick2 = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return <>
  <div onClick={handleClick1}>click!</div>
  <div onClick={handleClick2}>click!!</div>
  </>;
};

export default EventHandlerTypes;

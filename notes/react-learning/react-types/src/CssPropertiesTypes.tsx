const CssPropertiesTypes = () => {
  const style: React.CSSProperties = {
    width: "300px",
    height: "300px",
    border: "1px solid red",
  };

  return <div style={{ ...style }}></div>;
};

export default CssPropertiesTypes;

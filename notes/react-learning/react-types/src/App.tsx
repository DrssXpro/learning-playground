import CssPropertiesTypes from "./CssPropertiesTypes";
import EventHandlerTypes from "./EventHandlerTypes";
import FunctionTypes from "./FunctionTypes";
import HTMLAttributesTypes from "./HTMLAttributesTypes";
import ImperativeHandleTypes from "./ImperativeHandleTypes";
import JSXTypes from "./JSXTypes";
import PropsWithChildrenTypes from "./PropsWithChildrenTypes";
import ReducerTypes from "./ReducerTypes";
import RefTypes from "./RefTypes";

function App() {
  return (
    <>
      <div>
        <JSXTypes />
        <FunctionTypes />
        <RefTypes />
        <ImperativeHandleTypes />
        <ReducerTypes />
        <PropsWithChildrenTypes />
        <CssPropertiesTypes />
        <HTMLAttributesTypes />
        <EventHandlerTypes />
      </div>
    </>
  );
}

export default App;

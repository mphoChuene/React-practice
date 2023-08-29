import { useToggle } from "./useToggle";

const CustomeHooks = () => {
  const [isVisible, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "hide" : "show"}</button>
      {isVisible && <h2>hidden text</h2>}
    </div>
  );
};

export default CustomeHooks;

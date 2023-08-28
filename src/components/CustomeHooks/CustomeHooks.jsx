import React, { useState } from "react";

const CustomeHooks = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "hide" : "show"}
      </button>
      {isVisible && <h2>hidden text</h2>}
    </div>
  );
};

export default CustomeHooks;

import React, { useRef } from "react";

function DomElement() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();  // Accessing DOM element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default DomElement;

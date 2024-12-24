import React from "react";

function TagButton({ title, children }) {
  return (
    <button className="tegButton">
      {title}
      {children}
    </button>
  );
}

export default TagButton;

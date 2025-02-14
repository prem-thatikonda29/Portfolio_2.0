import React from "react";

function Link_Icon({ children }) {
  return (
    <div className="rounded-full w-10 h-10 flex justify-center items-center bg-background-light border-2">
      {children}
    </div>
  );
}

export default Link_Icon;

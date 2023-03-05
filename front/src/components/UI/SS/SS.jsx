import React from "react";

const SS = ({ openInfo, children, ...props }) => {
  function qqq() {
    openInfo(true);
  }

  return (
    <button class="ss" onClick={qqq}>
      {children}
    </button>
  );
};

export { SS };

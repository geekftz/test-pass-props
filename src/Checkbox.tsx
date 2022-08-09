import React from "react";

const Checkbox = (props) => {
  const { children, ...rest } = props;
  return (
    <label>
      <input type="checkbox" {...rest} />
      {children}
    </label>
  );
};

export default Checkbox;

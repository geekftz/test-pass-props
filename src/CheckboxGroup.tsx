import React from "react";

const CheckboxGroup = (props) => {
  const { selected = [], children } = props;
  return <>{children(selected)}</>;
};

export default CheckboxGroup;

import React from "react";
import Checkbox from "./Checkbox";

const CheckboxGroup = (props) => {
  const { selected = [], group = [] } = props;
  return (
    <>
      {group.map((value) => (
        <Checkbox checked={selected.indexOf(value) > -1} key={value}>
          {value}
        </Checkbox>
      ))}
    </>
  );
};

export default CheckboxGroup;

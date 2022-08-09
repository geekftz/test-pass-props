import React from "react";

const CheckboxGroup = (props) => {
  const { selected = [], children } = props;
  return (
    <>
      {
        // children 不是数组我们需要用 React.Children.map 来遍历
        // 或者把它转成数组
        React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          // 这里我们通常还会判断 child 的类型来确定是不是要传递相应的数据，这里我就不做了
          const childProps = {
            ...child.props,
            checked:
              selected.findIndex(
                (value) => value.toString() === child.props.children
              ) > -1,
          };

          return React.cloneElement(child, childProps);
        })
      }
    </>
  );
};

export default CheckboxGroup;

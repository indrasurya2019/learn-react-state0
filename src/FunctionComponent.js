import React from 'react';

const FunctionComponent = props => {
  console.log(props);
  console.log(props.name);
  console.log(props.age);
  console.log(props.addAge);

  return (
    <div>
      <h1>Ini Function Component</h1>
    </div>
  );
};

export default FunctionComponent;

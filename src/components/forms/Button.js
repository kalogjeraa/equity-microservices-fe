import React from 'react';

const Button = props => {
  const {
    appearance,
    children,
    handleClick,
  } = props;

  const classes = appearance !== null && appearance !== ''
    ? appearance
    : 'btn btn-primary';

  return (
    <button
      className={classes}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
import React from 'react';

const Container = props => {
  const {
    appearance,
    children,
  } = props;

  return (
    <div className={appearance}>
      {children}
    </div>
  );
};

export default Container;
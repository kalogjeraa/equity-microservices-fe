import React from 'react';

import Modal from '../../common/Modal';

const Sum = props => {
  const {
    isShowing,
    toggle,
  } = props;

  return (
    <Modal
      isShowing={isShowing}
      hide={toggle}
    />
  );
};

export default Sum;
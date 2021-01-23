import React from 'react';

const Input = props => {
  const {
    divStyles,
    handleChange,
    ID,
    inputStyles,
    text
  } = props;

  return (
    <div className={divStyles}>
      <input
        className={inputStyles}
        id={ID}
        name={ID}
        placeholder={text}
        onChange={event => handleChange(event.target.value, ID)}
      />
    </div>
  );
};

export default Input;
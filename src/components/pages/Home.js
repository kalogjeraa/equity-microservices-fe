import React, {useState} from 'react';

import Introduction from '../text/Introduction';
import Form from '../forms/Form';
import '../../styles/home.css';

const Home = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const fx_Map = {
    'num1': setNum1,
    'num2': setNum2,
  };

  const updateState = (newVal, whichNum) => {
    const parsed = newVal === ''
      ? 0
      : newVal;

    return fx_Map[whichNum](parsed);
  };

  const calculate = () => {
    // Make REST API calls here.
    // Go
    // and Python

    console.log(num1);
    console.log(num2);
    console.log(parseFloat(num1) + parseFloat(num2));
  };

  return (
    <div className="container">
      <Introduction />
      <Form
        calculate={calculate}
        updateState={updateState}
      />
    </div>
  );
};

export default Home;
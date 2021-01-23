import React, {useState} from 'react';

import Button from './Button';
import '../../styles/home.css';

const Form = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSubmit = () => {
    console.log('Submitted.');
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="myForm form">
          <form
            onClick={handleSubmit}
          >
            <div className="form-group">
              <input
                className="form-control my-input"
                id="num1"
                name="num1"
                placeholder="First Number"
                type="text"
                onChange={e => setNum1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control my-input"
                id="num2"
                name="num2"
                placeholder="Second Number"
                type="text"
                onChange={e => setNum2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Button
                appearance="btn btn-block g-button"
              >
                Calculate
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
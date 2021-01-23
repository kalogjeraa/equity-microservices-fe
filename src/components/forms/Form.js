import React from 'react';
import {Link} from 'react-router-dom';

import Input from './Input';
import Button from './Button';
import '../../styles/home.css';

const F_GROUP = 'form-group';
const FC_INPUT = 'form-control my-input';

const Form = props => {
  const {
    calculate,
    updateState,
  } = props;

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="myForm form">
          <form>
            <Input
              divStyles={F_GROUP}
              ID="num1"
              inputStyles={FC_INPUT}
              text="First Number"
              handleChange={updateState}
            />

            <Input
              divStyles={F_GROUP}
              ID="num2"
              inputStyles={FC_INPUT}
              text="Second Number"
              handleChange={updateState}
            />

            <div className={F_GROUP}>
              <Link to="/sum">
                <Button
                  appearance="btn btn-block g-button"
                  handleClick={calculate}
                >
                  Calculate
                </Button> 
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
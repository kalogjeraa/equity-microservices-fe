import React from 'react';

import Introduction from '../text/Introduction';
import Form from '../forms/Form';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className="container">
      <Introduction />
      <Form />
    </div>
  );
};

export default Home;
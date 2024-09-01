// src/App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';

const App = () => {
  return (
    <div>
      <h1>User Registration</h1>
      {/* <formikForm />*/}
      <RegistrationForm /> 
    </div>
  );
};

export default App;

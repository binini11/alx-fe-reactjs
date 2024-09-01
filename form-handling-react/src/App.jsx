// src/App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div>
      <h1>User Registration</h1>
      {/* <FormikForm />*/}
      <RegistrationForm /> 
    </div>
  );
};

export default App;

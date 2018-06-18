import React from 'react';
import { reduxForm } from 'redux-form';

import {connect} from 'react-redux';

import CreateProposal from '../components/CreateProposal';

export const FormContainer = ({handleSubmit,input}) => {

  return (
    <CreateProposal
      handleSubmit={handleSubmit}
      <input {...input} placeholder={label} type={type}/>
    />

  );
}





const formConfiguration = {
  form: 'main'
}

export default reduxForm(formConfiguration)(FormContainer);

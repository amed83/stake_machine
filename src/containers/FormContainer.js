import React from 'react';
import { reduxForm } from 'redux-form';

import {connect} from 'react-redux';

import CreateProposal  from '../components/CreateProposal';

const FormContainer = ({handleSubmit,input}) => {

  return (
    <CreateProposal
      handleSubmit={handleSubmit}

    />

  );
}



export default FormContainer

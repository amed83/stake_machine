import React from 'react';
import { reduxForm } from 'redux-form';
import {addProposal} from '../actions/index'
import {connect} from 'react-redux';

import CreateProposal from '../components/CreateProposal';

export const FormContainer = ({handleSubmit}) => {
  const submitForm = (values)=> {
      console.log('values ', values)
  }

  return (
    <CreateProposal
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />

  );
}


// const mapDispatchToProps = (dispatch) => ({
//   addProposal: () => dispatch(addProposal()),
// });
//
//
// export default connect(
//   () => ({}),
//   mapDispatchToProps,
// )(FormContainer);



const formConfiguration = {
  form: 'main'
}

export default reduxForm(formConfiguration)(FormContainer);

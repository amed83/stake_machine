import React, { Component } from 'react';
import { Input, Container, Button, Divider, Form} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {addProposal} from '../actions/index';

const containerStyle = {
    marginTop:"40px",
    marginBottom:"10px"

}

const formContainer = {
  display:"flex",
  justifyContent:"space-around",
}




const CreateProposal = ({handleSubmit,onSubmit}) => {
     return(
       <div>
           <h2>Hello Create Proposal </h2>
           <form onSubmit={handleSubmit}>
               <Field
                 name="firstName"
                 component="input"
                />
            <button type="submit">Submit </button>
          </form>
       </div>

        )
}



const mapDispatchToProps = (dispatch) => ({
  addProposal: () => dispatch(addProposal()),
});

export default reduxForm({
  form:'myForm',
},mapDispatchToProps) (CreateProposal)

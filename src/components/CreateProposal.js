import React, {Component} from 'react';
import { Button} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {addProposal} from '../actions/index';


const formStyle = {
    display:"flex",
    justifyContent:"space-between",
    width:"70%"
}

const mainContainer = {
  display:"flex",
  justifyContent:"center"
}

const errorMessage = {
   color:"red",
   marginTop:"5px"
}

const validate = (values )=> {

  const errors = {};

  if(!values.name){
    errors.name='Please provide a name!'
  }
  if(!values.stakes){
    errors.stakes= 'Please provide stakes!'
  }
  if(isNaN(values.stakes)) {
    errors.stakes=" Stakes must be a number"
  }
  if(!values.description){
    errors.description= 'Please provide a description'
  }
  return errors
}


const renderField = ({input,placeholder, meta:{touched, error}})=> (

      <div>
          <input {...input} placeholder={placeholder}/>

          <div style = {errorMessage} >
              {touched && error && <span> {error}</span>}
          </div>
      </div>
)

const CreateProposal = ({handleSubmit, input}) => {

     return(
       <div style= {mainContainer}>

           <form onSubmit={handleSubmit} style={formStyle}>
               <Field
                 name="name"
                 component={renderField}
                 placeholder="Name"
                  />
                <Field
                  name="description"
                  component={renderField}
                  placeholder="Description"
                 />
                 <Field
                   name="stakes"
                   component={renderField}
                   placeholder="Stakes"
                 />
            <Button primary type="submit">Submit </Button>
          </form>
       </div>

        )
}


const onSubmit = (values, dispatch) => {
  console.log('inside onSubmit ', dispatch)
   dispatch(addProposal())
};


export default reduxForm({
  form:'proposal',
  onSubmit,
  validate
}) (CreateProposal)

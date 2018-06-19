import React from 'react';
import { Button,Input} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {addProposal} from '../../actions/index';
import classes from './CreateProposal.css'


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

      <div className={classes.InputForm} >
          <Input {...input} placeholder={placeholder}/>

          <div style = {errorMessage} >
              {touched && error && <span> {error}</span>}
          </div>
      </div>
)

const CreateProposal = ({handleSubmit, input}) => {

     return(
       <div className={classes.MainContainer}>

           <form onSubmit={handleSubmit}  >
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
   dispatch(addProposal())
};


export default reduxForm({
  form:'proposal',
  onSubmit,
  validate
}) (CreateProposal)

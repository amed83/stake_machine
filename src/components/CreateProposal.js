import React from 'react';
import { Button} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {addProposal} from '../actions/index';
import PropTypes from 'prop-types';

const formStyle = {
    display:"flex",
    justifyContent:"space-between",
    width:"70%"
}

const mainContainer = {
  display:"flex",
  justifyContent:"center"
}

const validate = (values )=> {

  const errors = {};

  if(!values.name){
    errors.name='Please provide a name'
  }


  if(!values.stakes){
    errors.stakes= 'Please provide stakes'
  }
  console.log('errors ', errors )
  return errors
}


const renderField = ({input,label, meta:{touched, error}})=> (

      <div>
        <input {...input} placeholder={label}/>
        {touched && error && <span> {error}</span>}
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
   dispatch(addProposal())
};

CreateProposal.propTypes = {
  stakes:PropTypes.number
}

export default reduxForm({
  form:'proposal',
  onSubmit,
  validate
}) (CreateProposal)

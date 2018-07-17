import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Button, Input} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {findById} from '../../actions/index'
import classes from './FindVoteByIdContainer.css'


const renderField = ({input,placeholder})=> (
      <div>
          <Input {...input}placeholder = {placeholder} />
      </div>

)


class FindVoteByIdContainer extends Component {
      render(){
        const {handleSubmit}= this.props
        return(
          <form onSubmit={handleSubmit} className={classes.Form}>
              <Field
               name="voteId"
               component={renderField}
               placeholder="Find Votes by id"
              />
              <Button primary type="submit">Submit </Button>
          </form>
        )
      }

}

const onSubmit=(values,dispatch)=>{

  dispatch(findById(values))
}

export default reduxForm({
  form:'findById',
  onSubmit
})(FindVoteByIdContainer)

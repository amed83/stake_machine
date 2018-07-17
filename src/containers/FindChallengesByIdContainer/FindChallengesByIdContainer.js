import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Button, Input} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {findById} from '../../actions/index'
import classes from './FindChallengesByIdContainer.css'


const renderField = ({input,placeholder})=> (
      <div>
          <Input {...input}placeholder = {placeholder} />
      </div>

)


class FindChallengesByIdContainer extends Component {
      render(){
        const {handleSubmit}= this.props

        return(
          <form onSubmit={handleSubmit} className={classes.Form}>
              <Field
               name="id"
              component={renderField}
              placeholder="Find challenges by id"
              />
              <Button primary type="submit">Submit </Button>
          </form>
        )
      }

}

const onSubmit=(values,dispatch)=>{

  dispatch(findById(values.id))
}

export default reduxForm({
  form:'findById',
  onSubmit
})(FindChallengesByIdContainer)

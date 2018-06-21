import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Button, Input} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {findById} from '../../actions/index'
import classes from './FindById.css'


const renderField = ({input,placeholder})=> (
      <div>
          <Input {...input}placeholder = {placeholder} />
      </div>

)


class FindById extends Component {


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
  console.log(values)
  dispatch(findById(values.id))
}

export default reduxForm({
  form:'findById',
  onSubmit
})(FindById)

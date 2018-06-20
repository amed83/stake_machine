import React from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
import classes from './VotePopup.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {vote} from '../../actions/index'
import {connect}  from 'react-redux'

let VotePopup =({handleSubmit,value}) => {

      return(
            <div>
              <form onSubmit={handleSubmit} className={classes.ModalWrapper}>
                <div className={classes.OuterContainer}>
                    <div className={classes.InnerContainer}>
                    <Field name="voting" component="select">
                          <option></option>
                          <option value ='yes'>Yes</option>
                          <option value ='no'>No</option>
                    </Field>
                          <Button size= 'small'color= 'green' type = "submit">Submit</Button>
                    </div>
                </div>
              </form>
            </div>
      )

}

// const DropdownFormField= props=> (
//    <Field>
//    <Dropdown text= "Wanna vote ? ">
//        <Dropdown.Menu>
//            <Dropdown.Item text= "Yes"/>
//            <Dropdown.Item text = "No"/>
//        </Dropdown.Menu>
//    </Dropdown >
//
//
//    </Field>
// )

// <Dropdown text= "Wanna vote ? " name='voting'>
//     <Dropdown.Menu>
//         <Dropdown.Item text= "Yes" {...value} />
//         <Dropdown.Item text = "No" value= 'no'/>
//     </Dropdown.Menu>
// </Dropdown >

const onSubmit= (values,dispatch)=> {

  dispatch(vote())
}

VotePopup = reduxForm({
  form:'vote',
  onSubmit
})(VotePopup)

const selector = formValueSelector('vote')

VotePopup = connect(
  state => {
    const voteExpressed = selector(state, 'voting')

    return {
      voteExpressed
    }
  }
)(VotePopup)

export default VotePopup

// const onSubmit= (values,dispatch)=> {
//   console.log('values ', values )
//   dispatch(vote())
// }
//
// export default reduxForm({
//   form:'challenge',
//   onSubmit
// })(VotePopup)

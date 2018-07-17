import React from 'react';
import {Button} from 'semantic-ui-react';
import classes from './VotePopup.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {vote} from '../../actions/index'
import {connect}  from 'react-redux'
import ClosePopupContainer from '../../containers/ClosePopupContainer/ClosePopupContainer'

let VotePopup =({handleSubmit,value,id}) => {
      return(
            <div>
              <form onSubmit={handleSubmit} className={classes.ModalWrapper}>
                <div className={classes.OuterContainer}>
                  <h3 className={classes.Title}>Express your vote </h3>
                    <div className={classes.InnerContainer}>
                    <Field className={classes.FieldOption} name="voting" component="select">
                          <option></option>
                          <option value ='yes'>Yes</option>
                          <option value ='no'>No</option>
                    </Field>
                          <Button size= 'small'color= 'green' type = "submit">Submit</Button>
                          <div className={classes.CloseIcon}>
                              <ClosePopupContainer popup="vote"/>
                          </div>
                    </div>
                </div>
              </form>
            </div>
      )

}


const onSubmit= (values,dispatch,id)=> {

      dispatch(vote(id.id))
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

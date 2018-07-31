import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import classes from './ChallengePopup.css';
import { Field, reduxForm } from 'redux-form';
import {createChallenge} from '../../actions/index'
import ClosePopupContainer from '../../containers/ClosePopupContainer/ClosePopupContainer'

const ChallengePopup =({handleSubmit,input,id}) => {
      return(
            <div>
              <form onSubmit={handleSubmit} className={classes.ModalWrapper}>
                <div className={classes.OuterContainer}>
                    <div className={classes.InnerContainer}>
                          <Field
                          name="challenge"
                          component={renderField}
                          placeholder="write here your challenge"
                          />
                          <Button size= 'small'color= 'green' type = "submit">Submit</Button>
                          <ClosePopupContainer popup= "challenge" />
                    </div>
                </div>
              </form>
            </div>
      )

}

const renderField =({input,placeholder,meta:{touched,error}}) =>(
    <div>
          <Input {...input} placeholder={placeholder}/>
    </div>
)

const onSubmit= (values,dispatch,id)=> {

  dispatch(createChallenge(id.id))
}

export default reduxForm({
  form:'challenge',
  onSubmit
})(ChallengePopup)

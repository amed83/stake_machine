import React, {Component} from 'react';
import { Input, Button } from 'semantic-ui-react';
import classes from './ChallengePopup.css';

class ChallengePopup extends Component {

  render(){

      return(
            <div>
              <form className={classes.ModalWrapper}>
                <div className={classes.InnerContainer}>
                      <Input placeholder="write here your challenge"/>
                      <Button type = "submit">Submit</Button>
                </div>
              </form>
            </div>
      )
  }

}



export default (ChallengePopup)

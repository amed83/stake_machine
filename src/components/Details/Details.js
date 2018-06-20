import React from 'react';
import { Button, List} from 'semantic-ui-react';
import ChallengeContainer from '../../containers/ChallengeContainer/ChallengeContainer';
import VoteContainer from '../../containers/VoteContainer/VoteContainer';
import classes from './Details.css'

const Details = (props)=> {
   const {name,description,stakes} = props.details
   const {onHide}= props
    return(
          <div>
              <List>
                    <List.Item><b>Name:</b> {name}   </List.Item>
                    <List.Item> <b>Description:</b> {description}  </List.Item>
                    <List.Item><b>Stakes:</b> {stakes}   </List.Item>
                    <Button color='grey' onClick={onHide} >Hide Details </Button>
              </List>
              <div className={classes.Buttons}>
                    <ChallengeContainer />
                    <VoteContainer />
              </div>

          </div>
    )
}


export default Details

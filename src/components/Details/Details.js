import React from 'react';
import { Button, List} from 'semantic-ui-react';
import ChallengeContainer from '../../containers/ChallengeContainer/ChallengeContainer';
import VoteContainer from '../../containers/VoteContainer/VoteContainer';
import classes from './Details.css'

const Details = (props)=> {
    console.log(' Details challenge', props)
   const {name,description,stakes} = props.details
   const {onHide}= props
   let challenges=[];
   if(props.challenges){
      challenges = props.challenges.map((challenge,index)=>{
          return(
            <li key= {index}>{challenge}</li>
          )

      })
   }

    return(
          <div>
              <List>
                    <div className={classes.DetailsList}>
                        <List.Item><b>Name:</b> {name}   </List.Item>
                        <List.Item> <b>Description:</b> {description}  </List.Item>
                        <List.Item><b>Stakes:</b> {stakes}   </List.Item>
                        <List.Item><b>{challenges.length>0 ? 'Challenges :': ""}</b> {challenges}   </List.Item>
                    </div>
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

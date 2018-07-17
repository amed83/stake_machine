import React from 'react';
import { Button, List} from 'semantic-ui-react';
import ChallengeContainer from '../../containers/ChallengeContainer/ChallengeContainer';
import VoteContainer from '../../containers/VoteContainer/VoteContainer';
import classes from './Details.css'
import FindChallengesByIdContainer from '../../containers/FindChallengesByIdContainer/FindChallengesByIdContainer';
import FindVoteByIdContainer from '../../containers/FindVoteByIdContainer/FindVoteByIdContainer';
import ShowChallengesById from '../../components/ShowChallenges/ShowChallengesById';
import ShowVotesById from '../../components/ShowVotesById/ShowVotesById'

const Details = (props)=> {

   const {name,description,stakes,id} = props.details
   const {onHide,challengesById,showChallengesList,showVotesList,votesById}= props
    return(
          <div>
              <List>
                    <div className={classes.DetailsList}>
                        <List.Item><b>Name:</b> {name}   </List.Item>
                        <List.Item> <b>Description:</b> {description}  </List.Item>
                        <List.Item><b>Stakes:</b> {stakes}   </List.Item>
                        <List.Item><b>Id:</b> {id}   </List.Item>
                        <ShowChallengesById challengesById = {challengesById} show ={ showChallengesList}/>
                        <ShowVotesById votesById = {votesById} show = {showVotesList}/>
                    </div>

                    <Button color='grey' onClick={onHide} >Hide Details </Button>

              </List>
              <div className={classes.Buttons}>
                    <ChallengeContainer id={id}/>
                    <VoteContainer id={id} />
              </div>
              <div className={classes.FindById}>
                      <FindChallengesByIdContainer />
                      <FindVoteByIdContainer />
              </div>
          </div>
    )
}


export default Details

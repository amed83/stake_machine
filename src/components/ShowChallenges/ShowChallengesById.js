import React from 'react';
import {List} from 'semantic-ui-react';
import classes from './ShowChallengesById.css'

const ShowChallengesById = (props) => {
      const {show, challengesById} = props
      const challengesByIdList= challengesById.length > 0 ?
           challengesById.map(challenge=><div>{challenge.content}</div>)
           : <span className={classes.Error}>No Challenges found</span>

      return(
            <List.Item>
              {show && (challengesByIdList || challengesByIdList.length> 0) ? <div><b>Challenges : </b>{challengesByIdList}</div>: ''}
            </List.Item>
      )

}



export default ShowChallengesById

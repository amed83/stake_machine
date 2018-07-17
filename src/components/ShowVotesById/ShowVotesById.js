import React from 'react';
import {List} from 'semantic-ui-react';
import classes from './ShowVotesById.css';

const ShowVotesById = (props) => {

        const {show, votesById} = props
        const votesByIdList = votesById.length > 0 ?
              votesById.map((vote,index)=><div key={index}>{vote.vote}</div>)
              : <span className={classes.Error}>No Votes found</span>

        return(
          <List.Item>{show && (votesByIdList || votesByIdList.length> 0) ? <div><b>Votes : </b>{votesByIdList}</div>: ''}</List.Item>
        )
}




export default ShowVotesById

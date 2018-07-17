
import {
ADD_PROPOSAL,START_PROPOSAL_ADD, REQUEST_PROPOSALS,RECEIVE_PROPOSAL,
SHOW_DETAILS,HIDE_DETAILS,OPEN_CHALLENGE_POPUP,
CREATE_CHALLENGE,OPEN_VOTE_POPUP,VOTE,
CLOSE_VOTE_POPUP,CLOSE_CHALLENGE_POPUP,
FIND_BY_ID,SHOW_CHALLENGE_BY_ID,SHOW_VOTES_BY_ID} from './constants'

let id = 1

export function addProposal(){

  return (dispatch, getState) => {
  const form = getState().form;
    const proposal = {
      name:form.proposal.values.name,
      description:form.proposal.values.description,
      stakes:form.proposal.values.stakes,
      id:id ++
    }
    dispatch({
       type: ADD_PROPOSAL,
       proposal
    })
  }
}

export function startProposalAdd() {
    return {
       type: START_PROPOSAL_ADD
    }
}

export function requestProposals(){
    return (dispatch)=>{
       dispatch({
          type: REQUEST_PROPOSALS
       })
    const exampleProposal = [{
       "name": "This is an Example of Proposal",
       "description": "This is a useless proposal",
       "stakes":40,
       "id":0
    }]
    dispatch(receiveProposal(exampleProposal))
  }
}

export function receiveProposal(proposals) {
    return {
       type: RECEIVE_PROPOSAL,
       proposals
    }
}

export function showDetails(details){
   return{
        type:SHOW_DETAILS,
        details
   }
}

export function hideDetails(){
   return{
        type:HIDE_DETAILS
   }
}

export function openChallengePopup(){
  return{
    type:OPEN_CHALLENGE_POPUP
  }
}

export function createChallenge(getId){

  return(dispatch,getState)=>{
      const form = getState().form
      const challenge = {
          content:form.challenge.values.challenge,
          id:getId
      }

      dispatch({
        type:CREATE_CHALLENGE,
        challenge
      })
  }
}

export function openVotePopup(){
      return{
        type:OPEN_VOTE_POPUP
      }
}

export function vote(getId){
  return(dispatch,getState)=>{
      const form = getState().form
      const vote = {
          result:form.vote.values.voting,
          id:getId
      }
      dispatch({
        type:VOTE,
        vote
      })
  }
}

export function closeVotePopup(){
    return {
      type:CLOSE_VOTE_POPUP
    }
}

export function closeChallengePopup(){
    return {
      type:CLOSE_CHALLENGE_POPUP
    }
}

export function findById(id){
      //selecting if the id is coming from challenge or vote query
      let isVote = false
      if(typeof(id)=== 'object'){
        id = id.voteId
        isVote= true
      }
       return(dispatch,getState) =>{
          dispatch({
            type:FIND_BY_ID,
             id,
             isVote
          })
          const state = getState()
          if(!isVote){
            let challengesById = state.main.challengesById
            dispatch(showChallengeById(challengesById))
            return;
          }
           let votesById = state.main.votesById
           console.log('it never get here',votesById)
           dispatch(showVotesById(votesById))
       }
}

export function showChallengeById(challengesById){

       return{
           type:SHOW_CHALLENGE_BY_ID,
           challengesById
       }
}

export function showVotesById(votesById){
       console.log('votesById ', votesById)
      return{
         type:SHOW_VOTES_BY_ID,
         votesById
      }
}

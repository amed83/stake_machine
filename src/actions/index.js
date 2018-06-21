

import {
ADD_PROPOSAL,START_PROPOSAL_ADD, REQUEST_PROPOSALS,RECEIVE_PROPOSAL,
SHOW_DETAILS,HIDE_DETAILS,OPEN_CHALLENGE_POPUP,
CREATE_CHALLENGE,OPEN_VOTE_POPUP,VOTE,CLOSE_VOTE_POPUP,CLOSE_CHALLENGE_POPUP} from './constants'

export function addProposal(){

  return (dispatch, getState) => {
  const form = getState().form;
    const proposal = {
      name:form.proposal.values.name,
      description:form.proposal.values.description,
      stakes:form.proposal.values.stakes
    };
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
       "stakes":40
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

export function createChallenge(){
  return(dispatch,getState)=>{
      const form = getState().form
      const challenge = {
          content:form.challenge.values.challenge
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

export function vote(){
  return(dispatch,getState)=>{
      const form = getState().form
      const vote = {
          result:form.vote.values.voting
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

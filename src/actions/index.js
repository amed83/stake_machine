

import {ADD_PROPOSAL,START_PROPOSAL_ADD, REQUEST_PROPOSALS,RECEIVE_PROPOSAL,SHOW_DETAILS,HIDE_DETAILS} from './constants'

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

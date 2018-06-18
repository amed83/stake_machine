

import {ADD_PROPOSAL,START_PROPOSAL_ADD, REQUEST_PROPOSALS,RECEIVE_PROPOSAL} from './constants'

export function addProposal(){
  return (dispatch, getState) => {
  const form = getState().form;
    const proposal = {
      name:form.proposal.name.value,
      description:form.proposal.description.value,
      stake:form.proposal.stake.value
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
       "name": "Hello Machine",
       "description": "This great example",
       "stake":40
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

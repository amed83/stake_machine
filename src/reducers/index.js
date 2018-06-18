import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { ADD_PROPOSAL, START_PROPOSAL_ADD,REQUEST_PROPOSALS,RECEIVE_PROPOSAL } from '../actions/constants'


const initialState= {
  proposals:[],
  loadingProposal:true,
  addProposal:false
}

function mainReducer(state=initialState,action) {

  switch(action.type) {

    case ADD_PROPOSAL:
    return Object.assign({}, state, {
       addProposal:false,
       proposals:[
         ...state.proposals,
         action.proposal
       ]
    })
    case START_PROPOSAL_ADD:
      return Object.assign({}, state, {
        addProposal:true
      });
    case RECEIVE_PROPOSAL:
       return Object.assign({},state, {
          proposals:action.proposals,
          loadingProposal:false
       })
     case REQUEST_PROPOSALS:
        return Object.assign({},state , {
           loadingProposal:true
        })
    default:
        return state;
  }



}

const reducer = combineReducers({
      form:formReducer,
      main:mainReducer
})


export default reducer;

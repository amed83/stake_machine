import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { ADD_PROPOSAL, START_PROPOSAL_ADD,REQUEST_PROPOSALS,
        RECEIVE_PROPOSAL,SHOW_DETAILS, HIDE_DETAILS,OPEN_CHALLENGE_POPUP,
        CREATE_CHALLENGE,OPEN_VOTE_POPUP,VOTE,CLOSE_VOTE_POPUP,
        CLOSE_CHALLENGE_POPUP,FIND_BY_ID } from '../actions/constants'


const initialState= {
  proposals:[],
  loadingProposal:true,
  addProposal:false,
  showDetails:false,
  details:{},
  challengePopup:false,
  votePopup:false,
  challenges:[],
  votes:[]
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
    case SHOW_DETAILS:
      return Object.assign({}, state, {
         showDetails:true,
         details:action.details
      })
    case HIDE_DETAILS:
       return Object.assign({}, state, {
          showDetails:false
       })
    case OPEN_CHALLENGE_POPUP:
     return Object.assign({}, state, {
        challengePopup:true
     })
     case CREATE_CHALLENGE:
      return Object.assign({},state,{
         challenges:[
           ...state.challenges,
         { content:action.challenge.content,
            id:action.challenge.id,}],
          challengePopup:false
      })
      case OPEN_VOTE_POPUP:
       return Object.assign({}, state, {
         votePopup:true
      })
      case VOTE:
       return Object.assign({},state,{
          votes:[
            ...state.votes,
            action.vote.result
          ],
          votePopup:false
       })
      case CLOSE_VOTE_POPUP:
        return {
          ...state,
          votePopup:false
        }
        case CLOSE_CHALLENGE_POPUP:
          return {
            ...state,
            challengePopup:false
          }
        case FIND_BY_ID:
        if(state.challenges){
          const {challenges}= state
          const proposalToFind= challenges.filter(challenge => challenge.id ==action.id)

        }

        return{
          ...state
        }
        default:
        return state;
  }

}

const reducer = combineReducers({
      form:formReducer,
      main:mainReducer
})


export default reducer;

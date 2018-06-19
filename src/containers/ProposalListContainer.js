import { connect } from 'react-redux';
import React, { Component} from 'react';
import { startProposalAdd,requestProposals,showDetails } from '../actions/index';
import { Button} from 'semantic-ui-react';
import ProposalList from '../components/ProposalList'


class ProposalListContainer extends Component{

  componentWillMount(){

     if(!this.props.proposals ||!this.props.proposals.length ){

        this.props.requestProposals()
     }
  }

  render() {
    return(
            <div>
                <ProposalList {...this.props}/>
            </div>
      )
    }

 }


const mapStateToProps = state => ({
  proposals:state.main.proposals
})

const mapDispatchToProps = (dispatch) => ({
  requestProposals: ()=> dispatch(requestProposals()),
  onAdd: ()=>dispatch(startProposalAdd())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProposalListContainer)

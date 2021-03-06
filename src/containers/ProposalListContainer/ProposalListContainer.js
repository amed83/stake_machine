import { connect } from 'react-redux';
import React, { Component} from 'react';
import { startProposalAdd,requestProposals} from '../../actions/index';
import ProposalList from '../../components/ProposalList/ProposalList'


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

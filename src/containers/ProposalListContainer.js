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
  handleShowDetails(){
    this.props.showDetails()
  }
  render() {
  
      return(

            <div>
                <ProposalList {...this.props}/>
                <Button secondary onClick={this.handleShowDetails.bind(this)}>Details </Button>
            </div>
      )
    }

 }


const mapStateToProps = state => ({
  proposals:state.main.proposals
})

const mapDispatchToProps = (dispatch) => ({
  requestProposals: ()=> dispatch(requestProposals()),
  onAdd: ()=>dispatch(startProposalAdd()),
  showDetails:()=>dispatch(showDetails())

})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProposalListContainer)

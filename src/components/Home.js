import React , { Component } from 'react';
import { Container, Divider} from 'semantic-ui-react';
import CreateProposal from './CreateProposal';
import ProposalListContainer from '../containers/ProposalListContainer';
import {connect } from 'react-redux';



class Home extends Component {
      render(){
        const child =(this.props.addProposal) ? <CreateProposal />  : <ProposalListContainer />
        return(
             <Container textAlign = 'center' style={mainContainer}  >
              <h1>  Stake Machine </h1>
                <Divider />
                  {child}
             </Container>

         )

    }

}


const mainContainer = {
    marginTop: '15px'
}

const mapStateToProps = (state) => ({
    addProposal:state.main.addProposal
})


export default connect(mapStateToProps)(Home)

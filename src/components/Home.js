import React , { Component } from 'react';
import { Container} from 'semantic-ui-react';
import CreateProposal from './CreateProposal';
import ProposalListContainer from '../containers/ProposalListContainer';

class Home extends React.Component {
      render(){
        const child =(this.props.addProposal) ? <CreateProposal />  : <ProposalListContainer />
        return(
             <Container>
              <h1>  Stake Machine </h1>
                  {child}
             </Container>

         )

    }

}

export default Home

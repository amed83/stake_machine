
import React from 'react';
import { Container, Button } from 'semantic-ui-react'

import Proposal from './Proposal'

const ProposalList = ({proposals, onAdd }) => {

  const proposalNodes = proposals.map(proposal =>(

     <Proposal
          key= {proposal.name + proposal.description}
          {...proposal}
      />
  ))

    return (
         <div>
            <Container >
              <h3>Proposals </h3>
                {proposalNodes}
            </Container >
            <Button primary onClick={onAdd} style= {buttonStyle}>Add Proposal </Button>
         </div>
     )


}


const buttonStyle = {
  marginTop:'20px'
}



export default ProposalList

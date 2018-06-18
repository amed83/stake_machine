
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
                {proposalNodes}
            </Container >
            <button onClick={onAdd}>Add Proposal </button>
         </div>
     )


}


const proposalContainer = {
    marginTop:"20px",
    display:"flex",
    justifyContent:"center"
}


  const containerStyle = {
       marginTop:'40px',
       display:"flex",
       justifyContent:"space-around",
       fontSize:'14px'

  }



export default ProposalList

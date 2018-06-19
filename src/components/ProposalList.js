
import React from 'react';
import { Container, Button, Divider } from 'semantic-ui-react'

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
            <Container  >
              <div style= {buttonStyle}>
                <h3>Proposals </h3>
                <Button primary onClick={onAdd} >Add Proposal </Button>
              </div>
                <div  style= {listContainer}>
                    {proposalNodes}

                </div>
            </Container >

         </div>
     )


}


const buttonStyle = {
marginBottom:'20px'
}

const listContainer = {
  display:"flex",
  flexDirection:"column",
  alignItems:"space-between"
  // justifyContent:""
}

export default ProposalList

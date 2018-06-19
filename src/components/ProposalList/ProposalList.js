
import React from 'react';
import { Container, Button, Divider } from 'semantic-ui-react'
import classes from './ProposalList.css'
import Proposal from '../Proposal'


const ProposalList = ({proposals, onAdd }) => {

  const proposalNodes = proposals.map(proposal =>(

     <Proposal
          key= {proposal.name + proposal.description}
          {...proposal}
      />
  ))

    return (
         <div className={classes.ListContainer}>
              <div >
                   <h3>Proposals </h3>
                      {proposalNodes}
              </div>

              <div className={classes.ButtonContainer}>
                    <Button primary onClick={onAdd} >Add Proposal </Button>
              </div>
         </div>
     )


}


const buttonStyle = {
marginBottom:'20px'
}



export default ProposalList

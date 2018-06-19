
import React from 'react';
import { Button,} from 'semantic-ui-react'
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

export default ProposalList

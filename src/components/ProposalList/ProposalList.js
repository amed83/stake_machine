
import React from 'react';
import { Button,} from 'semantic-ui-react'
import classes from './ProposalList.css'
import ProposalContainer from '../../containers/ProposalContainer/ProposalContainer'


const ProposalList = ({proposals, onAdd }) => {

  const proposalNodes = proposals.map(proposal =>(

     <ProposalContainer
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

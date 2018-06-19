import React from 'react';
import { Button, List} from 'semantic-ui-react';
import Challenge from './Challenge';
import Vote from './Vote';


const Details = (props)=> {
   const {name,description,stakes} = props.details
   const {onHide}= props
    return(
          <div>
              <List>
                    <List.Item><b>Name:</b> {name}   </List.Item>
                    <List.Item> <b>Description:</b> {description}  </List.Item>
                    <List.Item><b>Stakes:</b> {stakes}   </List.Item>
                    <Button secondary onClick={onHide} >Hide Details </Button>
              </List>
              <Challenge />
              <Vote />
          </div>
    )
}


export default Details

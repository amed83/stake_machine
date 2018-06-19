import React, {Component} from 'react';
import { Button, List} from 'semantic-ui-react';

const Details = ({onHide,name,description,stakes})=> {

    return(
      <List>
            <List.Item><b>Name:</b> {name }   </List.Item>
            <List.Item> <b>Description:</b> {description }  </List.Item>
            <List.Item><b>Stakes:</b> { stakes}   </List.Item>
            <Button secondary onClick={onHide} >Hide Details </Button>
      </List>

    )
}


export default Details

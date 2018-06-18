import React from 'react';
import { List, Button, Divider } from 'semantic-ui-react';

const Proposal = ({name,description,stakes}) => {
    return (
        <List >
            <List.Item><b>Name:</b> {name }   </List.Item>
            <List.Item> <b>Description:</b> {description }  </List.Item>
            <List.Item><b>Stakes:</b> { stakes}   </List.Item>
              <Divider />
        </List>

    )
}



export default Proposal

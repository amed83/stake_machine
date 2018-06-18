import React from 'react';
import { List } from 'semantic-ui-react';

const Proposal = ({name,description,stakes}) => {
    return (
        <List >
            <List.Item> <b>Name:</b> {name }  <b>Description:</b> {description } <b>Stakes:</b> { stakes}    </List.Item>
        </List>

    )
}


export default Proposal

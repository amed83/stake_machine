import React from 'react';


const Proposal = ({name,description,stake}) => {
    return (
        <li>
            {name } {description } { stake}
        </li>

    )
}


export default Proposal

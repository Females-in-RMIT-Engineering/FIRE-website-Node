import React from 'react';
//import { Card } from 'semantic-ui-react';
import { UserCard } from 'react-ui-cards';


function CommitteeCard(props){
    return (
        <UserCard
            float
            header={props.imagesrc}
            name={props.name}
            positionName={props.role}
        />
    );
}


export default CommitteeCard;
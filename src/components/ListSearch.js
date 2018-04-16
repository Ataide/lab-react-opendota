import React from 'react'
import { List, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ListSearch = (props) => {
    return (
        <div>   
            <List divided>
                {props.players.map( player => (
                    <List.Item as={Link} to={`/stats/${player.account_id}`} key={player.account_id} style={{textAlign: 'left'}}>
                        <Image alt="" avatar src={player.avatarfull} />
                        <List.Content>
                        <List.Header as='a'>{player.personaname}</List.Header>
                            <List.Description style={{color:'gray', fontSize: '11px'}}>#{player.account_id}</List.Description>
                        </List.Content>                    
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default ListSearch
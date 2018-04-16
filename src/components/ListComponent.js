import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'


class ListComponent extends Component {
    constructor(props) {
        super(props);
    }

    //
    componentDidMount() {

    }

    render() {
        return (
            <List>
              
            {props.players.map( player => {
                <List.Item>
                <Image alt="" avatar src='https://s3.amazonaws.com/uifaces/faces/twitter/benoitboucart/128.jpg' />
                <List.Content>
                    <List.Header as='a'>Rachel</List.Header>
                    <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
                </List.Content>
                </List.Item>    
            })}
          </List>
        )
    }
}

export default ListComponent;
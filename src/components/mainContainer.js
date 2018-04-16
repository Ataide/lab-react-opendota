import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Switch, Route,NavLink} from 'react-router-dom'
import HomeHeading from './homeHeading'
import StatsContainer from './StatsContainer'

import {Container,Segment,Menu} from 'semantic-ui-react'
import searchContainer from './searchContainer';

class MainContainer extends Component {
   
  state = {
            input: '',
            playername: '',
            playersList: [],
            loading: false
            }  

  render() {   

    return (
     
        <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
           
            <Menu              
              inverted={true}
              pointing={true}
              secondary={true}
              size='large'
            >
              <Container>
                <Menu.Item as={NavLink} exact={true} to='/'>Home</Menu.Item>
                <Menu.Item as={NavLink} exact={true} to='/search'>Search</Menu.Item>
                <Menu.Item as={NavLink} exact={true} to='/stats/:id' disabled>Stats</Menu.Item>                      
              </Container>
            </Menu>
        
            <Switch>
                <Route path='/' exact component={ HomeHeading } />
                <Route path='/search' exact component={ searchContainer } />
                <Route path='/stats/:id' exact component={ StatsContainer } />                    
            </Switch>           
           
          </Segment>
       

      
     
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => ( 
  <MainContainer></MainContainer>
)

export default HomepageLayout
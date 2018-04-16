
import React, { Component } from 'react'
import { Form, Header,Container } from 'semantic-ui-react'
import searchPlayer from '../services/stats-api'
import List from './ListSearch'

class searchContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            playername: '',
            playersList: [],
            loading: false
        }     

        
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    
    
    changeHandler(ev) {
        this.setState({ playername: ev.target.value })
    }

    submitHandler(ev) {
        ev.preventDefault()
        this.setState({loading: true});
       
        searchPlayer(this.state.playername).then(res => {           
            
            this.setState(...this.state, { playersList: res.data, loading: false })  
        })            
    }   

    render() {
        return (
            <Container text> 
            
                <p>Procure por alguém no Dota2 e veja seu desempenho, stats e etc...</p>
                               
                <Form loading = {this.state.loading} style={{margin: '0 auto', width: '280px'} }> 
                    <Form.Group>
                        <Form.Input placeholder='Nome do Player' name='playername' onChange={ this.changeHandler } />                       
                        <Form.Button content='Submit' onClick={this.submitHandler} primary />
                    </Form.Group>
                </Form>  

                <List players={this.state.playersList} />               
               
            </Container>

            )
    }
    
}

export default searchContainer;


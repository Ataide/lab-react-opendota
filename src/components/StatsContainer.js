import React, { Component } from 'react'
import { Statistic, Label } from 'semantic-ui-react'
import {fetchStats, fetchWL} from '../services/stats-api'


class StatsContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            playerStats : [],
            avatar: '',
            personaname: '',
            name: '',
            wins: 0,
            losses: 0,
            winrate: 0,
            mmr: 0
        }
        
    }
    
    componentDidMount() {

        fetchStats(this.props.match.params.id).then( res => {
            this.setState(...this.state, {avatar: res.data.profile.avatarfull,personaname:res.data.profile.personaname, mmr: res.data.mmr_estimate.estimate});  
        })
    
        fetchWL(this.props.match.params.id).then( res => {
            let rate = (100 * res.data.win ) / (res.data.win + res.data.lose);
            this.setState(...this.state, { wins: res.data.win, losses: res.data.lose, winrate: rate.toFixed(2)});                        
        })
    }

    render() { 

        return( 
        <div>
            <Label as='a' image size="massive" style={{ marginBottom: 20 }}>
                <img src={this.state.avatar} />
                {this.state.personaname}              
            </Label>
            <br/>
            <Statistic size="mini">
                <Statistic.Label style={{color: 'rgba(144, 144, 144, 0.87)'}}>WINS</Statistic.Label>
                <Statistic.Value style={{color:'rgb(102, 187, 106)'}}>{this.state.wins}</Statistic.Value>
            </Statistic>
            <Statistic size="mini">
                <Statistic.Label style={{color: 'rgba(144, 144, 144, 0.87)'}}>LOSSES</Statistic.Label>
                <Statistic.Value style={{color:'red'}}>{this.state.losses}</Statistic.Value>
            </Statistic>
            <Statistic size="mini">
                <Statistic.Label style={{color: 'rgba(144, 144, 144, 0.87)'}}>WIN RATE</Statistic.Label>
                <Statistic.Value style={{color:'white'}}>{this.state.winrate}</Statistic.Value>
            </Statistic>
            <Statistic size="mini">
                <Statistic.Label style={{color: 'rgba(144, 144, 144, 0.87)'}}>MMR</Statistic.Label>
                <Statistic.Value style={{color:'white'}}>{this.state.mmr}</Statistic.Value>
            </Statistic>
        </div>
    )}
}

export default StatsContainer;
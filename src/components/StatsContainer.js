import React, { Component } from 'react'
import fetchStats  from '../services/stats-api'

class StatsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgurl  : '',
            name    : '',
            wins    : 0,
            losses  : 0,
            winrate : 0,
            mmr     : 0
        }
    }

    componentDidMount() {
        fetchStats().then(function(response) {
            console.log(response.data);
        });
    }

    render() { 
        return( 

        <div className="box">
          
            <div className="box__header">
                <h3 className="box__header-title">Noryas</h3>
                <img className="box__header-img" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b6/b6fb4ea763781ef30a48cf025dcf926eeec0de38_medium.jpg"></img>
            </div>

            <div className="box__body">
                
                <div className="stats stats--main">
                    <div className="stats__amount">12698</div>
                    <div className="stats__caption">WINS</div>
                    <div className="stats__change">
                    <div className="stats__value stats__value--positive">+6%</div>
                    <div className="stats__period">this week</div>
                    </div>
                </div>
        
                <div className="stats">
                    <div className="stats__amount">87359</div>
                    <div className="stats__caption">LOSSES</div>
                    <div className="stats__change">
                    <div className="stats__value stats__value--negative">-12%</div>
                    <div className="stats__period">this week</div>
                    </div>
                </div>
        
                <div className="stats">
                    <div className="stats__amount">6302</div>
                    <div className="stats__caption">LOSSES</div>
                    <div className="stats__change">
                    <div className="stats__value">+78</div>
                    <div className="stats__period">this week</div>
                    </div>
                </div>
        
                <div className="stats">
                    <div className="stats__amount">268</div>
                    <div className="stats__caption">posts</div>
                    <div className="stats__change">
                    <div className="stats__value">+3</div>
                    <div className="stats__period">this week</div>
                    </div>
                </div>
            </div>
      </div>
        
    )}
}

export default StatsContainer;
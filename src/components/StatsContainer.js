import React, { Component } from 'react'

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

    }

    render() { return <h1>Stats Component</h1> }
}

export default StatsContainer;
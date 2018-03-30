import React, { Component } from 'react'

class ListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    //
    componentDidMount() {

    }

    render() {
        return (
            <div class="list__container">               
                    <ul class="list">
                        <li class="waves-effect">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/lingeswaran/128.jpg"></img>                       
                        <span>Noryas</span>
                                                      
                        </li>
                    </ul>    
            </div>
        )
    }
}

export default ListComponent;
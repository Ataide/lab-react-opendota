
import React, { Component } from 'react'

import List from './ListComponent'

class searchContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: ''
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div> 

                <section className="search__container flex">                     
                    <form className="search">               
                    
                        <div className="field">
                            <input type="text" class="input-search" id="input-search" name="input-search" required></input>
                            <label for="input-search">Search</label>
                        </div>                     

                    </form>  

                    <div class="field">
                            <button id="button"></button>
                        </div>

                </section>
                
                <List/>

            </div>

            )
    }
    
}

export default searchContainer;


import React, { Component } from 'react'
import CardList from "./CardList"
import {puppies} from "./Puppies"

export default class App extends Component {

    //ES7 React/Redux/GraphQL/React-Native snippets
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             puppies: puppies,
             imgp: 'puppies',
             cardS: "mw5 h5"
        }
    }
    

    render() {


        return (
            <div>
            
                <CardList puppies={this.state.puppies} cardS={this.state.cardS} imgp={this.state.imgp}/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import CardList from "./CardList"
import {puppies} from "./Puppies"
import SearchBox from "./SearchBox"

export default class App extends Component {

    //ES7 React/Redux/GraphQL/React-Native snippets
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             puppies: puppies,
             imgp: 'puppies',
             cardS: "mw5 h5",
              search: ""
        }
    }

    updPuppy = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        const final_puppies = this.state.puppies.filter(puppy => {return puppy.name.toLowerCase().includes(this.state.search.toLowerCase())});

        return (
            <div className="tc">
                <h1>Puppy Friends</h1>
                <SearchBox updPuppy={this.updPuppy}/>
                <CardList puppies={final_puppies} cardS={this.state.cardS} imgp={this.state.imgp}/>
            </div>
        )
    }
}

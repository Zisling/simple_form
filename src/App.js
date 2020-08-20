import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            time:0
        }
        this.timeChange = this.timeChange.bind(this)
    }

    componentDidMount() {
        this.timeChange()
    }
    timeChange(){
        axios.get('/time')
            .then(data=>this.setState({time:data.data.time}))
    }
    render() {
    return (
        <div>
            <p>The current time is {this.state.time}.</p>
        </div>
    );
    }
}

export default App;

// create your App component here
import React, {Component} from 'react'

export default class App extends Component {

    componentDidMount(){
        return fetch("http://api.open-notify.org/astros.json").then(resp=>resp.json()).then(guys => guys.map(guy => <li>{guy}</li>))
    }

    render(){
        return <h1>hi</h1>
    }
   
}
import React, { Component } from 'react';
import Panel from "./Panel";

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nome: 'Josué',
            idade: 32
        }
        console.log(this.state)
    }

    render() {
        const {nome, idade} = this.state;
        return (
            <p>
                State
                <br />
                {nome} - {idade}
            </p>
        );
    }
}

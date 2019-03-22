import React, { Component } from 'react';

export default class Clock2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
                .toLocaleString('en-US',{
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false
                })
        }
    }

    //já foi criado
    componentDidMount() {
        this.timer = setInterval(() => this.updateClock(),1000)
    }

    //remover componente
    componentWillMount() {
        clearInterval(this.timer);
    }

    updateClock(){
        this.setState({
            time: new Date()
                .toLocaleString('en-US',{
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false
                })
        });
    }

    //state modificado o render é re-executado
    render() {
        //destructor
        const { time } = this.state

        return (
          <h1>
              {time}
          </h1>
        );
    }
}

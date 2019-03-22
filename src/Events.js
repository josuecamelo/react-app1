import React, { Component } from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    }

    //
    //this.clickMethod = this.clickMethod.bind(this);
  }

  //Arrow functions já fica no mesmo contexto
  clickMethod = () =>{
    this.setState({
          clicked: this.state.clicked + 1
    })
    console.log(this.state.clicked);
    console.log('Clicado');
  }

  render() {
    return (
      <div>
        Colocando no mesmo contexto
        {/*<button onClick={this.clickMethod.bind(this)} type="button">Clique-Me</button>*/}
        <button onClick={this.clickMethod} type="button">Clique-Me</button>
      </div>
    );
  }
}

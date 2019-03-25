import React, { Component } from 'react';

export default class Events2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      data: []
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)
  }

  insertToData = (event) =>{
    const arr = this.state.data;
    this.state.data.push(this.state.nome)
    this.setState({
      nome: '',
      data: arr
    })
    console.log(this.state.data);
  }

  render() {
    const {data} = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleChange} name="nome" id="nome" placeholder="Informe Seu Nome" />
        <input type="text" onChange={this.handleChange} name="idade" id="idade" placeholder="Informe Sua Idade" />
        <button onClick={this.insertToData}>Ok!</button>

        <ul>
          { data.map(item =>(
            <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    );
  }
}

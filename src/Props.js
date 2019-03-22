import React, { Component } from 'react';
import Panel from "./Panel";

export default class Props extends Component {
    constructor(props) {
        super(props);
        const {attr, attr2, attr3} = this.props;
        console.log(attr, attr2, attr3);
    }
    render() {
        const {attr, attr2, attr3} = this.props;

        return (
            <div>
                {attr === 'JOSUÉ' ? <h1>Olá</h1> : <p>Teste</p>}
                <Panel headercolor="red" headercolor="blue" bordercolor="orange" headerText="Meu Texto"  data="School Of Net" />
                <Panel headercolor="gold" headercolor="green" bordercolor="purple" headerText="Meu Texto"  data="School Of Net" />
            </div>
        );
    }
}

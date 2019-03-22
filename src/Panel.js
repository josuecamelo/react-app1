import React, {Component} from 'react';

export default class Panel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {header, headerText,headercolor, bordercolor ,data} = this.props;
        return (
            <div className="panel" style={{ border: `1px solid ${bordercolor}` , width: '500px', height: '100px', position: 'relative' }}>
                <div className="panel-head" style={{ width: '100%', background: headercolor}}>{headerText}</div>
                <div className="panel-body">
                    {data}
                </div>
            </div>
        );
    }
}

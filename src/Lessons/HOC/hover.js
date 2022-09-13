import React, { Component } from 'react';
import withCoounter from './withCoounter';

class Hover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {increment, count} = this.props
        return (
            <div>
                <div onMouseOver={increment} style={{padding: '10px 20px', background: '#1111'}}>
                    {count}
                </div>
            </div>
        );
    }
}

export default withCoounter(Hover);
import React, { Component } from 'react';
import './array-dropdown.css';

import FormControl  from 'react-bootstrap/lib/FormControl';

class ArrayDropdown extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <FormControl componentClass="select" placeholder="select">
                {this.props.arr.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </FormControl>
        );
    }
}

export default ArrayDropdown;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './array-dropdown.css';

import FormControl  from 'react-bootstrap/lib/FormControl';

class ArrayDropdown extends Component {
    propTypes = {
        arr: PropTypes.array.isRequired
    };

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

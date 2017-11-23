import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './array-dropdown.css';

import FormControl  from 'react-bootstrap/lib/FormControl';

class ArrayDropdown extends Component {
    constructor(props, { store }) {
        super(props);
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
ArrayDropdown.propTypes = {
    arr: PropTypes.array.isRequired
};

ArrayDropdown.contextTypes = {
    store: PropTypes.object
}

export default ArrayDropdown;

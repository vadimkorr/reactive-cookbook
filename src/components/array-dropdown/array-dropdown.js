import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './array-dropdown.css';

import FormControl  from 'react-bootstrap/lib/FormControl';

class ArrayDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined
        }
    }

    onChange = (e) => {
        let valAsJson = JSON.parse(e.target.value);
        this.setState({
            value: valAsJson
        });
        if (this.props.onChange) { 
            this.props.onChange(valAsJson);
        }
    }

    render() {
        return (
            <FormControl componentClass="select" placeholder="select" onChange={this.onChange}>
                {this.props.arr.map((item, ind) => (
                    <option key={ind} value={JSON.stringify(this.props.arr[ind])}>{item}</option>
                ))}
            </FormControl>
        );
    }
}
// ArrayDropdown.propTypes = {
//     arr: PropTypes.array.isRequired
// };

// ArrayDropdown.contextTypes = {
//     store: PropTypes.object
// }

export default ArrayDropdown;

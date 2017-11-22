import React, { Component } from 'react';
import './array-dropdown.css';

class ArrayDropdown extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    getDefaultDropdown(arr) {
        return (
            <select>
                {arr.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        );
    }

    getStylishDropdown(arr) {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-danger">Action</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        );
    }

    render() {
        return this.getStylishDropdown(this.props.arr);        
        //return this.getDefaultDropdown(this.props.arr);
    }
}

export default ArrayDropdown;

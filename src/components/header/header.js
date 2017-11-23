import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="links">
                <Link to="/">App</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default Header;

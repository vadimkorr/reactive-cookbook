import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header-container">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Reactive Cookbook</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem>
                                <Link to="/">Board</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about">About</Link>
                            </NavItem>
                        </Nav>
                        <Navbar.Text pullRight>
                            Enjoy your meal!
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;

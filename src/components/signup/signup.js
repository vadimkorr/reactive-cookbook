import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ApiService from '../../services/api.service';

class Signup extends Component {
    constructor({ ...restProps }, context) {
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    signup() {
        this.context.apiService.signup({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        });
    }

    render() {
        return (
            <div className="outer-cont">
                <div className="login-cont">
                    <div className="form-group">
                        <label htmlFor="login-input">User Name</label>
                        <input
                            type="text"
                            id="login-input"
                            onChange = {(e) => this.setState({username: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-input">Email</label>
                        <input
                            type="text"
                            id="login-input"
                            onChange = {(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd-input">Password</label>
                        <input
                            type="password"
                            id="pwd-input"
                            onChange = {(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd-input">Confirm password</label>
                        <input 
                            type="password"
                            id="conf-pwd-input"/>
                    </div>
                    <div className="form-group">
                        <Button bsStyle="success" onClick={() => {this.signup()} }>Sign Up</Button>
                    </div>
                    <div className="form-group signup-link-cont">
                        <Link to="/login">I have account</Link>
                    </div>
                </div>
            </div>
        )
    }
}

Signup.contextTypes = {
    apiService: PropTypes.instanceOf(ApiService)
}

export default Signup;
// const mapStateToProps = (state) => ({
//     recipes: state.recipes
// });

// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators(recipeActions, dispatch)
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LeftPanel);
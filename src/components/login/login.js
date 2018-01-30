import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiService from '../../services/api.service';
import * as userActions from '../../store/actions/user.actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Login extends Component {
    constructor({ userState, dispatchUserAction, ...restProps }, context) {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        let self = this;
        this.context.apiService.login({
            username: this.state.username,
            password: this.state.password
        }).then(r => {
            self.props.dispatchUserAction.setToken(r.token);
            console.log(this.props.userState);
        });
    }

    render() {
        return (
            <div className="outer-cont">
                <div className="login-cont">
                    <div className="form-group">
                        <label htmlFor="login-input">Login</label>
                        <input
                            type="text"
                            id="login-input"
                            onChange = {(e) => this.setState({username: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd-input">Password</label>
                        <input
                            type="password"
                            id="pwd-input"
                            onChange = {(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            onClick={() => {this.login()} }>Login</button>
                    </div>
                    <div className="form-group signup-link-cont">
                        <Link to="/signup">I don't have account</Link>
                    </div>
                </div>
            </div>
        )
    }
}

Login.contextTypes = {
    apiService: PropTypes.instanceOf(ApiService)
}

const mapStateToProps = (state) => ({
    userState: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchUserAction: bindActionCreators(userActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiService from '../../services/api.service';

class Login extends Component {
    constructor({ ...restProps }, context) {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login() {
        this.context.apiService.login({
            username: this.state.username,
            password: this.state.password
        }).then(r => {
            console.log("Bearer", r);
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

export default Login;

/*Login.contextTypes = {
    // recipeService: PropTypes.instanceOf(RecipeService)
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(recipeActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);*/
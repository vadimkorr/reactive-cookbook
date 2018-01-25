import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor({ ...restProps }, context) {
        super();
        console.log("RECIPE SERVICE")
    }
    render() {
        return (
            <div className="outer-cont">
                <div className="login-cont">
                    <div className="form-group">
                        <label htmlFor="login-input">Login</label>
                        <input type="text" id="login-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd-input">Password</label>
                        <input type="password" id="pwd-input"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-group signup-link-cont">
                        <Link to="/signup">I don't have account</Link>
                    </div>
                </div>
            </div>
        )
    }
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
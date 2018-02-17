import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ userStoreState, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        userStoreState.token
            ? <Component {...props} />
            : <Redirect to='/login' />
    )}/>
);

const mapStateToProps = (state) => ({
    userStoreState: state.user
});

export default connect(
    mapStateToProps
)(ProtectedRoute);
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AdminAuthRoutes from "./AdminAuthRoutes";
import "antd/dist/antd.css";
import * as actions from "./store/actions/auth";
import Hoc from "./hoc/hoc";
import Routes from './userUI/Routes';
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  //   <CustomLayout {...this.props}>
  //   <BaseRouter />
  // </CustomLayout>
  render() {
    return (
      <Router>
        <Hoc>
          <Route path='/admin' component={AdminAuthRoutes} />
          <Route path='/home' component={Routes} />

        </Hoc>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
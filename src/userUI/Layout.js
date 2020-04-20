import React from 'react';
import UserHeader from './Header';
import * as actions from "../store/actions/auth";
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom';
import UserFooter from './Footer';
import Hoc from '../hoc/hoc';
const { Header, Content, Footer } = Layout;

class UserLayout extends React.Component {

    render() {
        console.log(JSON.parse(localStorage.getItem("user")))
        return (
            <Layout className="layout">
               <UserHeader {...this.props}/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        {this.props.children}
                    </div>
                </Content>
                <UserFooter />
            </Layout>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLayout);
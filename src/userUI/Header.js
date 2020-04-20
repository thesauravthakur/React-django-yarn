import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, NavLink } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

class UserHeader extends React.Component {
    render() {
        return (
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    style={{ lineHeight: "64px" }}
                >
                    <Menu.Item key="1" >
                        <NavLink to='/home'>Home</NavLink>
                    </Menu.Item>
                    {this.props.isAuthenticated &&
                        <Menu.Item key="3">
                            <Link to="/admin">Admin</Link>
                        </Menu.Item>
                    }
                    {this.props.isAuthenticated ? (
                        <Menu.Item key="2" onClick={this.props.logout}>

                            <NavLink to='/home'>Logout</NavLink>

                        </Menu.Item>
                    ) : (
                            <Menu.Item key="2">
                                <Link to="/admin/login">Login</Link>
                            </Menu.Item>
                        )}
                </Menu>
            </Header>
        )
    }
}
export default UserHeader;


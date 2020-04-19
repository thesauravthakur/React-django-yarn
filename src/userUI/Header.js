import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, NavLink } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

class UserHeader extends React.Component {
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
                    <Menu.Item key="2"><NavLink to='/home'>Home</NavLink></Menu.Item>
                    <Menu.Item key="1"><NavLink to='/home/staff'> Staffs</NavLink></Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
export default UserHeader;


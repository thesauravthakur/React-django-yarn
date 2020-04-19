import React from 'react';
import UserHeader from './Header';
import { Layout, Menu, Breadcrumb } from 'antd';
import UserFooter from './Footer';
const { Header, Content, Footer } = Layout;

class UserLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <UserHeader />
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
export default UserLayout;

import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class UserFooter extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                This is User's Dashboard
            </Footer>
        )
    }
}
export default UserFooter;


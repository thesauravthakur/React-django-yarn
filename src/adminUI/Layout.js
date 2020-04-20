import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter, NavLink } from "react-router-dom";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import SideBar from './SideBar';
import '../static/Layout.css';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class CustomLayout extends React.Component {

  render() {
    return (
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" >
              <NavLink to='/home'>Home</NavLink>
            </Menu.Item>
            {this.props.isAuthenticated ? (
              <Menu.Item key="2" onClick={this.props.logout}>

                <NavLink to='/admin'>Logout</NavLink>

              </Menu.Item>
            ) : (
                <Menu.Item key="2">
                  <Link to="/admin/login">Login</Link>
                </Menu.Item>
              )}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>

          {this.props.isAuthenticated ?
            (
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            )
            :
            (null)
          }

          <Layout className="site-layout-background" style={{}}>

            {
              this.props.isAuthenticated ?
                (<SideBar />)
                :
                (null)
            }

            <Content style={{ padding: '15px 24px', minHeight: 440, backgroundColor: 'white' }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin Dashboard</Footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CustomLayout)
);



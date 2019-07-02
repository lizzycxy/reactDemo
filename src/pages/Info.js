import React from "react";
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import InfoRouter from "../router/InfoRouter";
import { getDataToSession } from "../utils";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Info extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    componentDidMount(){
        getDataToSession();
    }
    render() {
        return (
            <div>
                <h2 style={{textAlign:"center"}}>title</h2>
                <Layout>
                    <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/info/echarts">
                                    <Icon type="area-chart" />
                                    <span>Echarts</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu 
                                key="2"
                                title={
                                    <span>
                                        <Icon type="shop" />
                                        <span>Tools</span>
                                    </span>
                                }>
                                <Menu.Item key="1-1">
                                    <Link to="/info/tools-todolist">
                                        <span>Todolist</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="1-2">
                                    <Link to="/info/tools-conuter">
                                        <span>Conuter</span>
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="3">
                                <Link to="/info/table">
                                    <Icon type="table" />
                                    <span>Table</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/info/active">
                                    <Icon type="smile" />
                                    <span>Active</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 550,
                            }}
                        >
                            <InfoRouter />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Info;
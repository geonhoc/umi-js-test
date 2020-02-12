import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import '../../node_modules/antd/dist/antd.css';

import {Menu, Icon, Layout} from 'antd';
const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

interface State {
  collapsed: boolean;
}

interface Props {
  children: any;
}

class BasicLayout extends React.Component<Props, State> {

  state: State = {
    collapsed: false
  };

  render() {
    const {children} = this.props;
    const {collapsed} = this.state;

    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline">

            <Menu.Item key="1">
              <Link to='/option1'>
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to='/option2'>
                <Icon type="desktop"/>
                <span>Option 2</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to='/option3'>
                <Icon type="file" />
                <span>Option 3</span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="team" />
                  <span>Option 4</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to='/option4-1'>Option 4-1</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/option4-2'>Option 4-2</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/option4-3'>Option 4-3</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/option4-4'>Option 4-4</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}} />
          <Content style={{margin: '0 16px'}}>
            {children}
          </Content>
          <Footer style={{textAlign: 'center'}}>GeonHo Workspace</Footer>
        </Layout>
      </Layout>
    );
  }

  onCollapse = (collapsed: boolean): void => {
    this.setState({collapsed});
  };
}

export default BasicLayout;

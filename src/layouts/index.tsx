import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import '../../node_modules/antd/dist/antd.css';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

interface State {
  collapsed: boolean;
}


interface Props {
  children: any;
}

class BasicLayout extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.setState({collapsed: false})
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.normal}>
        <h1 className={styles.title}><span>Tripbtoz</span></h1>
        <div className={styles.container}>
          <div className={styles.leftMenu}>
            <Menu
              mode="inline"
              theme="light"
              inlineCollapsed={false}
            >
              <Menu.Item key="1">
                <Link to='/option1'>
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/option2'>
                  <Icon type="desktop" />
                  <span>Option 2</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/option3'>
                  <Icon type="inbox" />
                  <span>Option 3</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                  <Icon type="mail" />
                  <span>Option 4</span>
                </span>
                }
              >
                <Menu.Item key="5"><Link to='/option4-1'>Option 4-1</Link></Menu.Item>
                <Menu.Item key="6"><Link to='/option4-2'>Option 4-2</Link></Menu.Item>
                <Menu.Item key="7"><Link to='/option4-3'>Option 4-3</Link></Menu.Item>
                <Menu.Item key="8"><Link to='/option4-4'>Option 4-4</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </div>

          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default BasicLayout;
